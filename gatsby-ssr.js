// ABOUTME: Injects critical theme CSS and a synchronous theme-detection script
// ABOUTME: Prevents flash by setting html/body inline styles before the browser paints

import React from 'react'

const criticalCss = `
  :root {
    --color-bg: #ffffff;
    --color-text: #0f172a;
    --color-accent: #d97706;
    --color-surface: #f8fafc;
    --color-border: #e2e8f0;
    --color-text-muted: #64748b;
  }
  html[data-theme="dark"] {
    --color-bg: #0f172a;
    --color-text: #f8fafc;
    --color-accent: #f59e0b;
    --color-surface: #1e293b;
    --color-border: #334155;
    --color-text-muted: #94a3b8;
  }
  html, body {
    background-color: var(--color-bg);
    color: var(--color-text);
  }
`

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      var isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var bg = isDark ? '#0f172a' : '#ffffff';
      var text = isDark ? '#f8fafc' : '#0f172a';
      var html = document.documentElement;
      html.style.backgroundColor = bg;
      html.style.color = text;
      html.setAttribute('data-theme', isDark ? 'dark' : 'light');
      function setBody() {
        var b = document.body;
        if (b) {
          b.style.backgroundColor = bg;
          b.style.color = text;
        }
      }
      if (document.body) {
        setBody();
      } else {
        var obs = new MutationObserver(function() {
          if (document.body) { setBody(); obs.disconnect(); }
        });
        obs.observe(html, { childList: true });
      }
    } catch (e) {}
  })();
`

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      key="critical-theme-css"
      dangerouslySetInnerHTML={{ __html: criticalCss }}
    />,
    <script
      key="theme-detection"
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />,
  ])
}
