(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();(()=>{const n={openModalBtn:document.querySelector("[data-modal-open]"),openModalBtn1:document.querySelector("[data-modal-open1]"),openModalBtn2:document.querySelector("[data-modal-open2]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};n.openModalBtn.addEventListener("click",t),n.closeModalBtn.addEventListener("click",t),n.openModalBtn1.addEventListener("click",t),n.openModalBtn2.addEventListener("click",t);function t(){n.modal.classList.toggle("is-hidden")}})();(()=>{const n=document.querySelector(".burger__menu"),t=document.querySelector(".burger__open-btn"),l=document.querySelector(".burger__close-btn"),r=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),n.classList.toggle("is-open");const o=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[o](document.body)};t.addEventListener("click",r),l.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
