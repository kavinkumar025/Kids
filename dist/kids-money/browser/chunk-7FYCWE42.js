import {
  Component,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QO3DPW6E.js";
import "./chunk-YFKO4TLY.js";

// src/app/pages/landing.ts
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.n;
function LandingPage_For_147_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "polyline", 51)(1, "path", 113);
  }
}
function LandingPage_For_147_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 58)(1, "circle", 59)(2, "circle", 60);
  }
}
function LandingPage_For_147_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "polyline", 64)(1, "polyline", 65);
  }
}
function LandingPage_For_147_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 114)(1, "path", 115);
  }
}
function LandingPage_For_147_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "polyline", 110);
  }
}
function LandingPage_For_147_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 116)(1, "polyline", 117);
  }
}
function LandingPage_For_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 108);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 109);
    \u0275\u0275conditionalCreate(3, LandingPage_For_147_Conditional_3_Template, 2, 0);
    \u0275\u0275conditionalCreate(4, LandingPage_For_147_Conditional_4_Template, 3, 0);
    \u0275\u0275conditionalCreate(5, LandingPage_For_147_Conditional_5_Template, 2, 0);
    \u0275\u0275conditionalCreate(6, LandingPage_For_147_Conditional_6_Template, 2, 0);
    \u0275\u0275conditionalCreate(7, LandingPage_For_147_Conditional_7_Template, 1, 0, ":svg:polyline", 110);
    \u0275\u0275conditionalCreate(8, LandingPage_For_147_Conditional_8_Template, 2, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "h3", 111);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 112);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-testid", "feature-" + f_r1.key);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", f_r1.bg);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", f_r1.color);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r1.key === "tasks" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r1.key === "saving" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r1.key === "investing" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r1.key === "stories" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r1.key === "credit" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r1.key === "levels" ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r1.desc);
  }
}
function LandingPage_For_159_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 118);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 119);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 112);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r2.n);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r2.desc);
  }
}
var LandingPage = class _LandingPage {
  features = [
    { key: "tasks", title: "Tasks & Rewards", desc: "Create chores and missions. Kids complete them to earn virtual coins and build real discipline.", color: "#0D9488", bg: "rgba(13,148,136,0.10)" },
    { key: "saving", title: "Smart Goals", desc: "Set savings targets and visually track progress toward things they actually want to buy.", color: "#3B82F6", bg: "rgba(59,130,246,0.10)" },
    { key: "investing", title: "SIP Investing", desc: "Understand compound interest and long-term wealth through recurring virtual investments.", color: "#A855F7", bg: "rgba(168,85,247,0.10)" },
    { key: "stories", title: "Financial Stories", desc: "Interactive lessons with quizzes. Learn money concepts through fun, age-appropriate stories.", color: "#F97316", bg: "rgba(249,115,22,0.10)" },
    { key: "credit", title: "Credit Score", desc: "A gamified score that rewards responsibility \xE2\u20AC\u201D completing tasks, hitting savings, repaying loans.", color: "#EC4899", bg: "rgba(236,72,153,0.10)" },
    { key: "levels", title: "10 Skill Levels", desc: "Progress from Money Beginner to Money Legend as skills, habits, and XP grow over time.", color: "#F59E0B", bg: "rgba(245,158,11,0.10)" }
  ];
  steps = [
    { n: 1, title: "Create your account", desc: "Sign up as a parent in seconds. No credit card, no real money involved." },
    { n: 2, title: "Add your children", desc: "Create kid profiles with avatars, custom themes, and a secret login PIN." },
    { n: 3, title: "Start learning together", desc: "Assign tasks, set goals, and watch your kids build lifelong financial habits." }
  ];
  static \u0275fac = function LandingPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingPage, selectors: [["app-landing"]], decls: 195, vars: 0, consts: [[1, "min-h-screen", "mesh-gradient"], ["data-testid", "landing-nav", 1, "fixed", "top-0", "inset-x-0", "z-50", "glass"], [1, "max-w-6xl", "mx-auto", "px-6", "h-16", "flex", "items-center", "justify-between"], ["routerLink", "/", 1, "flex", "items-center", "gap-2.5"], [1, "w-8", "h-8", "rounded-xl", "flex", "items-center", "justify-center", 2, "background", "linear-gradient(135deg,#0D9488,#14B8A6)"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-white"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "3"], ["d", "M2 10h20"], [1, "font-bold", "font-heading", "text-base", "tracking-tight"], [1, "flex", "items-center", "gap-1.5"], ["routerLink", "/login", "data-testid", "landing-login-btn", 1, "text-sm", "font-semibold", "px-4", "py-2", "rounded-full", "transition-colors", 2, "color", "var(--fg-muted)"], ["routerLink", "/signup", "data-testid", "landing-signup-btn", 1, "btn-teal", "!py-2", "!px-5", "!text-sm"], [2, "padding-top", "64px"], [1, "max-w-6xl", "mx-auto", "px-6", "py-20", "lg:py-28", "grid", "lg:grid-cols-2", "gap-14", "lg:gap-20", "items-center"], [1, "animate-fade-up"], ["data-testid", "hero-badge", 1, "inline-flex", "items-center", "gap-2", "px-3.5", "py-1.5", "rounded-full", "text-xs", "font-bold", "font-heading", "tracking-wide", "mb-6", 2, "background", "rgba(13,148,136,0.10)", "color", "#0D9488"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3.5", "h-3.5"], ["d", "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"], [1, "font-extrabold", "font-heading", "tracking-tight", "mb-5", 2, "font-size", "clamp(2.4rem,4.8vw,3.75rem)", "line-height", "1.08", "color", "var(--fg)"], [2, "background", "linear-gradient(135deg,#0D9488,#14B8A6)", "-webkit-background-clip", "text", "-webkit-text-fill-color", "transparent", "background-clip", "text"], [1, "text-lg", "leading-relaxed", "max-w-lg", "mb-8", 2, "color", "var(--fg-muted)"], [1, "flex", "flex-wrap", "gap-3", "mb-10"], ["routerLink", "/signup", "data-testid", "hero-cta", 1, "btn-teal", "!px-8", "!py-3.5", "!text-base"], ["routerLink", "/login", 1, "btn-ghost", "!px-7", "!py-3.5", "!text-base"], [1, "flex", "items-center", "gap-3"], [1, "flex", "-space-x-2.5"], [1, "w-9", "h-9", "rounded-full", "border-2", "flex", "items-center", "justify-center", "text-[11px]", "font-bold", "text-white", 2, "border-color", "var(--canvas)", "background", "#3B82F6"], [1, "w-9", "h-9", "rounded-full", "border-2", "flex", "items-center", "justify-center", "text-[11px]", "font-bold", "text-white", 2, "border-color", "var(--canvas)", "background", "#EC4899"], [1, "w-9", "h-9", "rounded-full", "border-2", "flex", "items-center", "justify-center", "text-[11px]", "font-bold", "text-white", 2, "border-color", "var(--canvas)", "background", "#10B981"], [1, "w-9", "h-9", "rounded-full", "border-2", "flex", "items-center", "justify-center", "text-[11px]", "font-bold", "text-white", 2, "border-color", "var(--canvas)", "background", "#F59E0B"], [1, "text-sm", 2, "color", "var(--fg-muted)"], [1, "font-semibold", 2, "color", "var(--fg)"], [1, "hidden", "lg:block", "animate-fade-up", "stagger-2"], [1, "relative", "ml-8"], [1, "card-widget", "p-6", "rounded-3xl", "relative", "z-10", 2, "box-shadow", "var(--shadow-float)"], [1, "flex", "items-center", "justify-between", "mb-5"], [1, "w-11", "h-11", "rounded-2xl", "flex", "items-center", "justify-center", "text-white", "font-bold", "text-base", 2, "background", "linear-gradient(135deg,#3B82F6,#06B6D4)"], [1, "text-sm", "font-bold", "font-heading"], [1, "text-xs", "font-medium", 2, "color", "#10B981"], [1, "badge", 2, "background", "rgba(13,148,136,0.10)", "color", "#0D9488"], [1, "rounded-2xl", "p-5", "mb-4", 2, "background", "linear-gradient(135deg,#0D9488,#14B8A6)"], [1, "text-xs", "font-medium", "mb-1", 2, "color", "rgba(255,255,255,0.65)"], [1, "text-3xl", "font-extrabold", "text-white", "font-heading"], [1, "flex", "gap-4", "mt-2.5"], [1, "text-[10px]", 2, "color", "rgba(255,255,255,0.55)"], [1, "text-xs", "font-bold", "text-white"], [1, "text-xs", "font-semibold", "font-heading", "mb-2.5", 2, "color", "var(--fg-muted)"], [1, "space-y-2"], [1, "flex", "items-center", "gap-3", "p-2.5", "rounded-xl", 2, "background", "var(--muted)"], [1, "w-8", "h-8", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(16,185,129,0.12)"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4", 2, "color", "#10B981"], ["points", "9 11 12 14 22 4"], [1, "flex-1", "min-w-0"], [1, "text-xs", "font-semibold", "truncate"], [1, "text-[10px]", 2, "color", "var(--fg-muted)"], [1, "text-xs", "font-bold", 2, "color", "#10B981"], [1, "w-8", "h-8", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(59,130,246,0.12)"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4", 2, "color", "#3B82F6"], ["cx", "12", "cy", "12", "r", "10"], ["cx", "12", "cy", "12", "r", "6"], ["cx", "12", "cy", "12", "r", "2"], [1, "text-xs", "font-bold", 2, "color", "#3B82F6"], [1, "w-8", "h-8", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(168,85,247,0.12)"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4", 2, "color", "#A855F7"], ["points", "23 6 13.5 15.5 8.5 10.5 1 18"], ["points", "17 6 23 6 23 12"], [1, "text-xs", "font-bold", 2, "color", "#A855F7"], [1, "absolute", "-top-4", "-right-4", "card-widget", "px-3.5", "py-2.5", "rounded-2xl", "z-20", "animate-fade-up", "stagger-3", 2, "box-shadow", "var(--shadow-float)"], [1, "flex", "items-center", "gap-2"], [1, "text-lg"], [1, "text-xs", "font-bold", "font-heading"], [1, "absolute", "-bottom-4", "-left-5", "card-widget", "px-3.5", "py-2.5", "rounded-2xl", "z-20", "animate-fade-up", "stagger-4", 2, "box-shadow", "var(--shadow-float)"], [1, "text-[10px]", "font-medium", 2, "color", "var(--fg-muted)"], [1, "text-xl", "font-extrabold", "font-heading", 2, "color", "#10B981"], [1, "py-20", "lg:py-28", "px-6", 2, "background", "var(--surface)"], [1, "max-w-6xl", "mx-auto"], [1, "text-center", "max-w-2xl", "mx-auto", "mb-14"], [1, "text-xs", "font-bold", "font-heading", "uppercase", "tracking-widest", "mb-3", 2, "color", "#0D9488"], [1, "text-3xl", "lg:text-[2.5rem]", "font-bold", "font-heading", "tracking-tight", "leading-[1.15]"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-5"], [1, "card-widget", "card-widget-glow", "p-7", "animate-fade-up"], [1, "py-20", "lg:py-28", "px-6"], [1, "max-w-5xl", "mx-auto"], [1, "text-center", "mb-14"], [1, "text-3xl", "lg:text-[2.5rem]", "font-bold", "font-heading", "tracking-tight"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-8", "lg:gap-12"], [1, "text-center", "animate-fade-up"], [1, "max-w-3xl", "mx-auto", "text-center"], [1, "rounded-3xl", "p-12", "lg:p-20", "relative", "overflow-hidden", 2, "background", "linear-gradient(135deg,#0D9488 0%,#0F766E 100%)"], [1, "absolute", "top-0", "right-0", "w-72", "h-72", "rounded-full", "opacity-[0.08]", 2, "background", "white", "transform", "translate(35%,-40%)"], [1, "absolute", "bottom-0", "left-0", "w-56", "h-56", "rounded-full", "opacity-[0.06]", 2, "background", "white", "transform", "translate(-35%,40%)"], [1, "relative", "z-10"], [1, "text-2xl", "lg:text-4xl", "font-bold", "font-heading", "text-white", "mb-4", "tracking-tight"], [1, "text-base", "mb-8", "max-w-sm", "mx-auto", 2, "color", "rgba(255,255,255,0.72)"], [1, "flex", "flex-col", "sm:flex-row", "gap-3", "justify-center"], ["routerLink", "/signup", "data-testid", "cta-signup", 1, "inline-flex", "items-center", "justify-center", "gap-2", "px-10", "py-4", "bg-white", "rounded-full", "font-bold", "font-heading", "tracking-tight", "hover:scale-105", "transition-transform", 2, "color", "#0D9488"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["d", "M5 12h14M12 5l7 7-7 7"], ["routerLink", "/login", 1, "inline-flex", "items-center", "justify-center", "px-8", "py-4", "rounded-full", "font-semibold", "font-heading", "border-2", "text-white", "transition-colors", 2, "border-color", "rgba(255,255,255,0.3)"], [1, "px-6", "pb-10"], [1, "max-w-6xl", "mx-auto", "pt-8", "border-t", "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-4", 2, "border-color", "var(--border)"], [1, "flex", "items-center", "gap-2.5"], [1, "w-7", "h-7", "rounded-lg", "flex", "items-center", "justify-center", 2, "background", "linear-gradient(135deg,#0D9488,#14B8A6)"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "text-white"], [1, "font-bold", "font-heading", "text-sm"], [1, "flex", "gap-5"], ["routerLink", "/login", 1, "text-sm", "font-medium", 2, "color", "var(--fg-muted)"], ["routerLink", "/signup", 1, "text-sm", "font-medium", 2, "color", "var(--fg-muted)"], [1, "w-12", "h-12", "rounded-2xl", "flex", "items-center", "justify-center", "mb-5"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["points", "22 12 18 12 15 21 9 3 6 12 2 12"], [1, "font-bold", "font-heading", "text-base", "mb-2", "tracking-tight"], [1, "text-sm", "leading-relaxed", 2, "color", "var(--fg-muted)"], ["d", "M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"], ["d", "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"], ["d", "M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"], ["cx", "12", "cy", "8", "r", "7"], ["points", "8.21 13.89 7 23 12 20 17 23 15.79 13.88"], [1, "w-14", "h-14", "rounded-2xl", "flex", "items-center", "justify-center", "mx-auto", "mb-5", "text-white", "font-extrabold", "font-heading", "text-xl", 2, "background", "linear-gradient(135deg,#0D9488,#14B8A6)"], [1, "font-bold", "font-heading", "mb-2", "tracking-tight"]], template: function LandingPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "a", 3)(4, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "rect", 6)(7, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "span", 8);
      \u0275\u0275text(9, "Kids Money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "nav", 9)(11, "a", 10);
      \u0275\u0275text(12, "Sign In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 11);
      \u0275\u0275text(14, "Get Started");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "section", 12)(16, "div", 13)(17, "div", 14)(18, "div", 15);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 16);
      \u0275\u0275element(20, "path", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " Financial Literacy for Kids ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "h1", 18);
      \u0275\u0275text(23, " Teach money skills");
      \u0275\u0275element(24, "br");
      \u0275\u0275elementStart(25, "span", 19);
      \u0275\u0275text(26, "they'll keep forever.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "p", 20);
      \u0275\u0275text(28, " A gamified platform where kids earn, save, invest, and learn \xE2\u20AC\u201D all with virtual coins, fully managed by you. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 21)(30, "a", 22);
      \u0275\u0275text(31, "Start for Free \xE2\u2020\u2019");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "a", 23);
      \u0275\u0275text(33, "Sign In");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 24)(35, "div", 25)(36, "div", 26);
      \u0275\u0275text(37, "A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 27);
      \u0275\u0275text(39, "S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 28);
      \u0275\u0275text(41, "M");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 29);
      \u0275\u0275text(43, "K");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "p", 30)(45, "span", 31);
      \u0275\u0275text(46, "2,400+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, " families learning together ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 32)(49, "div", 33)(50, "div", 34)(51, "div", 35)(52, "div", 24)(53, "div", 36);
      \u0275\u0275text(54, "S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div")(56, "p", 37);
      \u0275\u0275text(57, "Sarah's Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 38);
      \u0275\u0275text(59, "\xE2\u2014\x8F Level 5 \xE2\u20AC\u201D Budget Hero");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "span", 39);
      \u0275\u0275text(61, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 40)(63, "p", 41);
      \u0275\u0275text(64, "Total Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "p", 42);
      \u0275\u0275text(66, "\xE2\u201A\xA2 2,450");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 43)(68, "div")(69, "p", 44);
      \u0275\u0275text(70, "Earned");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "p", 45);
      \u0275\u0275text(72, "3,120");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div")(74, "p", 44);
      \u0275\u0275text(75, "Saved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p", 45);
      \u0275\u0275text(77, "680");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div")(79, "p", 44);
      \u0275\u0275text(80, "Invested");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p", 45);
      \u0275\u0275text(82, "240");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(83, "p", 46);
      \u0275\u0275text(84, "Recent Activity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 47)(86, "div", 48)(87, "div", 49);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(88, "svg", 50);
      \u0275\u0275element(89, "polyline", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(90, "div", 52)(91, "p", 53);
      \u0275\u0275text(92, "Cleaned bedroom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p", 54);
      \u0275\u0275text(94, "Task reward");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "span", 55);
      \u0275\u0275text(96, "+25");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 48)(98, "div", 56);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(99, "svg", 57);
      \u0275\u0275element(100, "circle", 58)(101, "circle", 59)(102, "circle", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(103, "div", 52)(104, "p", 53);
      \u0275\u0275text(105, "Saved to Bicycle goal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p", 54);
      \u0275\u0275text(107, "Goal savings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "span", 61);
      \u0275\u0275text(109, "-50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "div", 48)(111, "div", 62);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(112, "svg", 63);
      \u0275\u0275element(113, "polyline", 64)(114, "polyline", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(115, "div", 52)(116, "p", 53);
      \u0275\u0275text(117, "Monthly SIP investment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "p", 54);
      \u0275\u0275text(119, "SIP \xE2\u20AC\u201D Auto");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "span", 66);
      \u0275\u0275text(121, "-100");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(122, "div", 67)(123, "div", 68)(124, "span", 69);
      \u0275\u0275text(125, "\xE2\xAD\x90");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div")(127, "p", 70);
      \u0275\u0275text(128, "+50 XP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "p", 54);
      \u0275\u0275text(130, "Level up!");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(131, "div", 71)(132, "p", 72);
      \u0275\u0275text(133, "Credit Score");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "p", 73);
      \u0275\u0275text(135, "750");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(136, "section", 74)(137, "div", 75)(138, "div", 76)(139, "p", 77);
      \u0275\u0275text(140, "Everything they need");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "h2", 78);
      \u0275\u0275text(142, "Real-world skills,");
      \u0275\u0275element(143, "br");
      \u0275\u0275text(144, "zero real risk.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "div", 79);
      \u0275\u0275repeaterCreate(146, LandingPage_For_147_Template, 13, 13, "div", 80, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(148, "section", 81)(149, "div", 82)(150, "div", 83)(151, "p", 77);
      \u0275\u0275text(152, "Simple setup");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "h2", 84);
      \u0275\u0275text(154, "Up and running");
      \u0275\u0275element(155, "br");
      \u0275\u0275text(156, "in under 5 minutes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "div", 85);
      \u0275\u0275repeaterCreate(158, LandingPage_For_159_Template, 7, 3, "div", 86, _forTrack1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(160, "section", 74)(161, "div", 87)(162, "div", 88);
      \u0275\u0275element(163, "div", 89)(164, "div", 90);
      \u0275\u0275elementStart(165, "div", 91)(166, "h2", 92);
      \u0275\u0275text(167, "Start your family's");
      \u0275\u0275element(168, "br");
      \u0275\u0275text(169, "financial journey today.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "p", 93);
      \u0275\u0275text(171, "No real money. No risk. Just fun financial lessons your kids will actually enjoy.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "div", 94)(173, "a", 95);
      \u0275\u0275text(174, " Get Started Free ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(175, "svg", 96);
      \u0275\u0275element(176, "path", 97);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(177, "a", 98);
      \u0275\u0275text(178, " Sign In ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(179, "footer", 99)(180, "div", 100)(181, "div", 101)(182, "div", 102);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(183, "svg", 103);
      \u0275\u0275element(184, "rect", 6)(185, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(186, "span", 104);
      \u0275\u0275text(187, "Kids Money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "p", 30);
      \u0275\u0275text(189, "\xC2\xA9 2026 Kids Money \xC2\xB7 Built with love for families.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "div", 105)(191, "a", 106);
      \u0275\u0275text(192, "Sign In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "a", 107);
      \u0275\u0275text(194, "Sign Up");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(146);
      \u0275\u0275repeater(ctx.features);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.steps);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingPage, [{
    type: Component,
    args: [{
      selector: "app-landing",
      standalone: true,
      imports: [RouterLink],
      template: `
    <div class="min-h-screen mesh-gradient">

      <!-- \xE2\u201D\u20AC\xE2\u201D\u20AC Navbar \xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC -->
      <header class="fixed top-0 inset-x-0 z-50 glass" data-testid="landing-nav">
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a routerLink="/" class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center" style="background: linear-gradient(135deg,#0D9488,#14B8A6)">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/></svg>
            </div>
            <span class="font-bold font-heading text-base tracking-tight">Kids Money</span>
          </a>
          <nav class="flex items-center gap-1.5">
            <a routerLink="/login" class="text-sm font-semibold px-4 py-2 rounded-full transition-colors" style="color: var(--fg-muted)" data-testid="landing-login-btn">Sign In</a>
            <a routerLink="/signup" class="btn-teal !py-2 !px-5 !text-sm" data-testid="landing-signup-btn">Get Started</a>
          </nav>
        </div>
      </header>

      <!-- \xE2\u201D\u20AC\xE2\u201D\u20AC Hero \xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC -->
      <section style="padding-top: 64px">
        <div class="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <!-- Left: copy -->
          <div class="animate-fade-up">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold font-heading tracking-wide mb-6"
                 style="background: rgba(13,148,136,0.10); color: #0D9488" data-testid="hero-badge">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              Financial Literacy for Kids
            </div>

            <h1 class="font-extrabold font-heading tracking-tight mb-5" style="font-size: clamp(2.4rem,4.8vw,3.75rem); line-height: 1.08; color: var(--fg)">
              Teach money skills<br>
              <span style="background:linear-gradient(135deg,#0D9488,#14B8A6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">they'll keep forever.</span>
            </h1>

            <p class="text-lg leading-relaxed max-w-lg mb-8" style="color: var(--fg-muted)">
              A gamified platform where kids earn, save, invest, and learn \xE2\u20AC\u201D all with virtual coins, fully managed by you.
            </p>

            <div class="flex flex-wrap gap-3 mb-10">
              <a routerLink="/signup" class="btn-teal !px-8 !py-3.5 !text-base" data-testid="hero-cta">Start for Free \xE2\u2020\u2019</a>
              <a routerLink="/login" class="btn-ghost !px-7 !py-3.5 !text-base">Sign In</a>
            </div>

            <div class="flex items-center gap-3">
              <div class="flex -space-x-2.5">
                <div class="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[11px] font-bold text-white" style="border-color:var(--canvas);background:#3B82F6">A</div>
                <div class="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[11px] font-bold text-white" style="border-color:var(--canvas);background:#EC4899">S</div>
                <div class="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[11px] font-bold text-white" style="border-color:var(--canvas);background:#10B981">M</div>
                <div class="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[11px] font-bold text-white" style="border-color:var(--canvas);background:#F59E0B">K</div>
              </div>
              <p class="text-sm" style="color:var(--fg-muted)">
                <span class="font-semibold" style="color:var(--fg)">2,400+</span> families learning together
              </p>
            </div>
          </div>

          <!-- Right: dashboard preview -->
          <div class="hidden lg:block animate-fade-up stagger-2">
            <div class="relative ml-8">
              <div class="card-widget p-6 rounded-3xl relative z-10" style="box-shadow: var(--shadow-float)">
                <!-- Profile row -->
                <div class="flex items-center justify-between mb-5">
                  <div class="flex items-center gap-3">
                    <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-bold text-base" style="background:linear-gradient(135deg,#3B82F6,#06B6D4)">S</div>
                    <div>
                      <p class="text-sm font-bold font-heading">Sarah's Dashboard</p>
                      <p class="text-xs font-medium" style="color:#10B981">\xE2\u2014\x8F Level 5 \xE2\u20AC\u201D Budget Hero</p>
                    </div>
                  </div>
                  <span class="badge" style="background:rgba(13,148,136,0.10);color:#0D9488">Active</span>
                </div>
                <!-- Balance -->
                <div class="rounded-2xl p-5 mb-4" style="background:linear-gradient(135deg,#0D9488,#14B8A6)">
                  <p class="text-xs font-medium mb-1" style="color:rgba(255,255,255,0.65)">Total Balance</p>
                  <p class="text-3xl font-extrabold text-white font-heading">\xE2\u201A\xA2 2,450</p>
                  <div class="flex gap-4 mt-2.5">
                    <div><p class="text-[10px]" style="color:rgba(255,255,255,0.55)">Earned</p><p class="text-xs font-bold text-white">3,120</p></div>
                    <div><p class="text-[10px]" style="color:rgba(255,255,255,0.55)">Saved</p><p class="text-xs font-bold text-white">680</p></div>
                    <div><p class="text-[10px]" style="color:rgba(255,255,255,0.55)">Invested</p><p class="text-xs font-bold text-white">240</p></div>
                  </div>
                </div>
                <!-- Transactions -->
                <p class="text-xs font-semibold font-heading mb-2.5" style="color:var(--fg-muted)">Recent Activity</p>
                <div class="space-y-2">
                  <div class="flex items-center gap-3 p-2.5 rounded-xl" style="background:var(--muted)">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(16,185,129,0.12)">
                      <svg class="w-4 h-4" style="color:#10B981" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/></svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-xs font-semibold truncate">Cleaned bedroom</p>
                      <p class="text-[10px]" style="color:var(--fg-muted)">Task reward</p>
                    </div>
                    <span class="text-xs font-bold" style="color:#10B981">+25</span>
                  </div>
                  <div class="flex items-center gap-3 p-2.5 rounded-xl" style="background:var(--muted)">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(59,130,246,0.12)">
                      <svg class="w-4 h-4" style="color:#3B82F6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-xs font-semibold truncate">Saved to Bicycle goal</p>
                      <p class="text-[10px]" style="color:var(--fg-muted)">Goal savings</p>
                    </div>
                    <span class="text-xs font-bold" style="color:#3B82F6">-50</span>
                  </div>
                  <div class="flex items-center gap-3 p-2.5 rounded-xl" style="background:var(--muted)">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(168,85,247,0.12)">
                      <svg class="w-4 h-4" style="color:#A855F7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-xs font-semibold truncate">Monthly SIP investment</p>
                      <p class="text-[10px]" style="color:var(--fg-muted)">SIP \xE2\u20AC\u201D Auto</p>
                    </div>
                    <span class="text-xs font-bold" style="color:#A855F7">-100</span>
                  </div>
                </div>
              </div>

              <!-- Floating XP badge -->
              <div class="absolute -top-4 -right-4 card-widget px-3.5 py-2.5 rounded-2xl z-20 animate-fade-up stagger-3" style="box-shadow:var(--shadow-float)">
                <div class="flex items-center gap-2">
                  <span class="text-lg">\xE2\xAD\x90</span>
                  <div>
                    <p class="text-xs font-bold font-heading">+50 XP</p>
                    <p class="text-[10px]" style="color:var(--fg-muted)">Level up!</p>
                  </div>
                </div>
              </div>

              <!-- Floating credit score -->
              <div class="absolute -bottom-4 -left-5 card-widget px-3.5 py-2.5 rounded-2xl z-20 animate-fade-up stagger-4" style="box-shadow:var(--shadow-float)">
                <p class="text-[10px] font-medium" style="color:var(--fg-muted)">Credit Score</p>
                <p class="text-xl font-extrabold font-heading" style="color:#10B981">750</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- \xE2\u201D\u20AC\xE2\u201D\u20AC Features \xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC -->
      <section class="py-20 lg:py-28 px-6" style="background:var(--surface)">
        <div class="max-w-6xl mx-auto">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <p class="text-xs font-bold font-heading uppercase tracking-widest mb-3" style="color:#0D9488">Everything they need</p>
            <h2 class="text-3xl lg:text-[2.5rem] font-bold font-heading tracking-tight leading-[1.15]">Real-world skills,<br>zero real risk.</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            @for (f of features; track f.title) {
              <div class="card-widget card-widget-glow p-7 animate-fade-up" [attr.data-testid]="'feature-' + f.key">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" [style.background]="f.bg">
                  <svg class="w-6 h-6" [style.color]="f.color" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    @if (f.key === 'tasks')    { <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/> }
                    @if (f.key === 'saving')   { <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/> }
                    @if (f.key === 'investing'){ <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/> }
                    @if (f.key === 'stories')  { <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/> }
                    @if (f.key === 'credit')   { <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/> }
                    @if (f.key === 'levels')   { <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/> }
                  </svg>
                </div>
                <h3 class="font-bold font-heading text-base mb-2 tracking-tight">{{ f.title }}</h3>
                <p class="text-sm leading-relaxed" style="color:var(--fg-muted)">{{ f.desc }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- \xE2\u201D\u20AC\xE2\u201D\u20AC How it works \xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC -->
      <section class="py-20 lg:py-28 px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-14">
            <p class="text-xs font-bold font-heading uppercase tracking-widest mb-3" style="color:#0D9488">Simple setup</p>
            <h2 class="text-3xl lg:text-[2.5rem] font-bold font-heading tracking-tight">Up and running<br>in under 5 minutes.</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            @for (step of steps; track step.n) {
              <div class="text-center animate-fade-up">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white font-extrabold font-heading text-xl" style="background:linear-gradient(135deg,#0D9488,#14B8A6)">{{ step.n }}</div>
                <h3 class="font-bold font-heading mb-2 tracking-tight">{{ step.title }}</h3>
                <p class="text-sm leading-relaxed" style="color:var(--fg-muted)">{{ step.desc }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- \xE2\u201D\u20AC\xE2\u201D\u20AC CTA \xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC -->
      <section class="py-20 lg:py-28 px-6" style="background:var(--surface)">
        <div class="max-w-3xl mx-auto text-center">
          <div class="rounded-3xl p-12 lg:p-20 relative overflow-hidden" style="background:linear-gradient(135deg,#0D9488 0%,#0F766E 100%)">
            <div class="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.08]" style="background:white;transform:translate(35%,-40%)"></div>
            <div class="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-[0.06]" style="background:white;transform:translate(-35%,40%)"></div>
            <div class="relative z-10">
              <h2 class="text-2xl lg:text-4xl font-bold font-heading text-white mb-4 tracking-tight">Start your family's<br>financial journey today.</h2>
              <p class="text-base mb-8 max-w-sm mx-auto" style="color:rgba(255,255,255,0.72)">No real money. No risk. Just fun financial lessons your kids will actually enjoy.</p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <a routerLink="/signup" class="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white rounded-full font-bold font-heading tracking-tight hover:scale-105 transition-transform" style="color:#0D9488" data-testid="cta-signup">
                  Get Started Free
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a routerLink="/login" class="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold font-heading border-2 text-white transition-colors" style="border-color:rgba(255,255,255,0.3)">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- \xE2\u201D\u20AC\xE2\u201D\u20AC Footer \xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC -->
      <footer class="px-6 pb-10">
        <div class="max-w-6xl mx-auto pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style="border-color:var(--border)">
          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 rounded-lg flex items-center justify-center" style="background:linear-gradient(135deg,#0D9488,#14B8A6)">
              <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/></svg>
            </div>
            <span class="font-bold font-heading text-sm">Kids Money</span>
          </div>
          <p class="text-sm" style="color:var(--fg-muted)">\xC2\xA9 2026 Kids Money \xC2\xB7 Built with love for families.</p>
          <div class="flex gap-5">
            <a routerLink="/login" class="text-sm font-medium" style="color:var(--fg-muted)">Sign In</a>
            <a routerLink="/signup" class="text-sm font-medium" style="color:var(--fg-muted)">Sign Up</a>
          </div>
        </div>
      </footer>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingPage, { className: "LandingPage", filePath: "src/app/pages/landing.ts", lineNumber: 239 });
})();
export {
  LandingPage
};
//# sourceMappingURL=chunk-7FYCWE42.js.map
