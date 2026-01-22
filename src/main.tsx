import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'sonner';
import App from "./App";
import "./index.css";

// 确保DOM元素存在
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  // 如果根元素不存在，记录错误并显示备用内容
  console.error("Root element not found");
  
  // 创建一个简单的备用界面，避免白屏
  const fallbackElement = document.createElement("div");
  fallbackElement.id = "fallback-root";
  fallbackElement.style.cssText = `
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8fafc;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `;
  fallbackElement.innerHTML = `
    <div style="text-align: center; padding: 2rem;">
      <div style="font-size: 3rem; margin-bottom: 1rem;">🚀</div>
      <h1 style="font-size: 2rem; color: #1e293b; margin-bottom: 1rem;">Tour & Business in China</h1>
      <p style="font-size: 1.125rem; color: #64748b; margin-bottom: 2rem;">
        Professional ground services for international visitors
      </p>
      <button 
        style="
          padding: 0.75rem 1.5rem;
          background-color: #dc2626;
          color: white;
          border: none;
          border-radius: 9999px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        "
        onclick="window.location.reload()"
      >
        Refresh Page
      </button>
    </div>
  `;
  
  document.body.appendChild(fallbackElement);
}
