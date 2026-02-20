import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-VL7AD74M.js";
import {
  AuthService
} from "./chunk-6U66OTJU.js";
import {
  CommonModule,
  Component,
  NgClass,
  Router,
  RouterLink,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QO3DPW6E.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// src/app/pages/login.ts
function LoginPage_Conditional_60_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function LoginPage_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 40);
    \u0275\u0275listener("ngSubmit", function LoginPage_Conditional_60_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleParentLogin());
    });
    \u0275\u0275elementStart(1, "div")(2, "label", 41);
    \u0275\u0275text(3, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function LoginPage_Conditional_60_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "label", 41);
    \u0275\u0275text(7, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function LoginPage_Conditional_60_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, LoginPage_Conditional_60_Conditional_9_Template, 2, 1, "p", 44);
    \u0275\u0275elementStart(10, "button", 45);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 46);
    \u0275\u0275text(13, " Don't have an account? ");
    \u0275\u0275elementStart(14, "a", 47);
    \u0275\u0275text(15, "Sign up");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.showPass() ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.password);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.error() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? "Signing in..." : "Sign In", " ");
  }
}
function LoginPage_Conditional_61_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function LoginPage_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 40);
    \u0275\u0275listener("ngSubmit", function LoginPage_Conditional_61_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleKidLogin());
    });
    \u0275\u0275elementStart(1, "div")(2, "label", 41);
    \u0275\u0275text(3, "Parent's Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function LoginPage_Conditional_61_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.parentEmail, $event) || (ctx_r1.parentEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "label", 41);
    \u0275\u0275text(7, "Your Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function LoginPage_Conditional_61_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.kidName, $event) || (ctx_r1.kidName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "label", 41);
    \u0275\u0275text(11, "Your PIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function LoginPage_Conditional_61_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.kidPin, $event) || (ctx_r1.kidPin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, LoginPage_Conditional_61_Conditional_13_Template, 2, 1, "p", 44);
    \u0275\u0275elementStart(14, "button", 51);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 46);
    \u0275\u0275text(17, "Ask your parent to create your account and set your PIN");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.parentEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.kidName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.kidPin);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.error() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? "Signing in..." : "Let's Go!", " ");
  }
}
var LoginPage = class _LoginPage {
  auth = inject(AuthService);
  router = inject(Router);
  tab = signal("parent", ...ngDevMode ? [{ debugName: "tab" }] : []);
  email = "";
  password = "";
  showPass = signal(false, ...ngDevMode ? [{ debugName: "showPass" }] : []);
  parentEmail = "";
  kidName = "";
  kidPin = "";
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  handleParentLogin() {
    return __async(this, null, function* () {
      if (!this.email || !this.password) {
        this.error.set("Please fill in all fields");
        return;
      }
      this.loading.set(true);
      this.error.set("");
      try {
        yield this.auth.login(this.email, this.password);
        this.router.navigate(["/dashboard"]);
      } catch (err) {
        this.error.set(err.message || "Login failed");
      } finally {
        this.loading.set(false);
      }
    });
  }
  handleKidLogin() {
    return __async(this, null, function* () {
      if (!this.parentEmail || !this.kidName || !this.kidPin) {
        this.error.set("Please fill in all fields");
        return;
      }
      this.loading.set(true);
      this.error.set("");
      try {
        yield this.auth.kidLogin(this.parentEmail, this.kidName, this.kidPin);
        this.router.navigate(["/kid/dashboard"]);
      } catch (err) {
        this.error.set(err.message || "Login failed");
      } finally {
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function LoginPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPage, selectors: [["app-login"]], decls: 62, vars: 4, consts: [[1, "min-h-screen", "flex", 2, "background-color", "var(--bg)"], [1, "hidden", "lg:flex", "lg:flex-col", "lg:w-[44%]", "xl:w-[40%]", "p-12", "relative", "overflow-hidden", 2, "background", "linear-gradient(145deg,#0D9488 0%,#0F766E 60%,#115E59 100%)"], [1, "absolute", "inset-0", "pointer-events-none"], [1, "absolute", "top-0", "right-0", "w-72", "h-72", "rounded-full", "opacity-[0.07]", 2, "background", "white", "transform", "translate(40%,-30%)"], [1, "absolute", "bottom-0", "left-0", "w-56", "h-56", "rounded-full", "opacity-[0.06]", 2, "background", "white", "transform", "translate(-30%,35%)"], ["routerLink", "/", 1, "flex", "items-center", "gap-2.5", "mb-auto", "relative", "z-10"], [1, "w-9", "h-9", "rounded-xl", "flex", "items-center", "justify-center", 2, "background", "rgba(255,255,255,0.18)"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-white"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "3"], ["d", "M2 10h20"], [1, "font-bold", "font-heading", "text-white", "text-base"], [1, "relative", "z-10", "mt-16"], [1, "text-3xl", "font-extrabold", "font-heading", "text-white", "mb-4", "tracking-tight", "leading-tight"], [1, "text-base", "mb-10", 2, "color", "rgba(255,255,255,0.72)"], [1, "space-y-4"], [1, "flex", "items-center", "gap-3"], [1, "w-9", "h-9", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(255,255,255,0.14)"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-white"], ["points", "9 11 12 14 22 4"], ["d", "M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"], [1, "text-sm", "text-white/80"], ["cx", "12", "cy", "12", "r", "10"], ["cx", "12", "cy", "12", "r", "6"], ["cx", "12", "cy", "12", "r", "2"], ["points", "23 6 13.5 15.5 8.5 10.5 1 18"], [1, "flex-1", "flex", "items-center", "justify-center", "p-6", "lg:p-12"], [1, "w-full", "max-w-md"], ["routerLink", "/", "data-testid", "login-back-btn", 1, "inline-flex", "items-center", "gap-2", "text-sm", "mb-8", "lg:hidden", 2, "color", "var(--fg-muted)"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["points", "15 18 9 12 15 6", "stroke-width", "2"], [1, "text-2xl", "font-extrabold", "font-heading", "tracking-tight", "mb-1"], [1, "text-sm", "mb-8", 2, "color", "var(--fg-muted)"], [1, "card", "p-7", "lg:p-8"], ["data-testid", "login-tabs", 1, "flex", "rounded-full", "p-1", "mb-6", 2, "background-color", "var(--muted)"], ["data-testid", "login-tab-parent", 3, "click", "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5"], ["d", "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2", "stroke-width", "2"], ["cx", "12", "cy", "7", "r", "4", "stroke-width", "2"], ["data-testid", "login-tab-kid", 3, "click", "ngClass"], ["d", "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", "stroke-width", "2"], [1, "space-y-5", 3, "ngSubmit"], [1, "label"], ["type", "email", "placeholder", "parent@example.com", "name", "email", "data-testid", "login-email-input", 1, "input", 3, "ngModelChange", "ngModel"], ["placeholder", "Enter your password", "name", "password", "data-testid", "login-password-input", 1, "input", 3, "ngModelChange", "type", "ngModel"], [1, "text-red-500", "text-sm"], ["type", "submit", "data-testid", "login-submit-btn", 1, "btn-primary", "w-full", "py-3", 3, "disabled"], [1, "text-center", "text-sm", "mt-6", 2, "color", "var(--fg-muted)"], ["routerLink", "/signup", "data-testid", "login-to-signup", 1, "font-medium", "text-primary"], ["type", "email", "placeholder", "parent@example.com", "name", "parentEmail", "data-testid", "kid-login-parent-email", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "What's your name?", "name", "kidName", "data-testid", "kid-login-name", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Enter your secret PIN", "name", "kidPin", "maxlength", "6", "data-testid", "kid-login-pin", 1, "input", "text-center", "tracking-[0.5em]", "text-lg", 3, "ngModelChange", "ngModel"], ["type", "submit", "data-testid", "kid-login-submit-btn", 1, "btn-primary", "w-full", "py-3", 3, "disabled"]], template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "div", 3)(4, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "a", 5)(6, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 7);
      \u0275\u0275element(8, "rect", 8)(9, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "span", 10);
      \u0275\u0275text(11, "Kids Money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11)(13, "h2", 12);
      \u0275\u0275text(14, "Welcome back to Your Family's Finance Hub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 13);
      \u0275\u0275text(16, "Sign in to track tasks, goals, and your children's growing financial skills.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 14)(18, "div", 15)(19, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 17);
      \u0275\u0275element(21, "polyline", 18)(22, "path", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "p", 20);
      \u0275\u0275text(24, "Assign tasks and approve rewards instantly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(27, "svg", 17);
      \u0275\u0275element(28, "circle", 21)(29, "circle", 22)(30, "circle", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "p", 20);
      \u0275\u0275text(32, "Track goals, savings, and investments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 15)(34, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 17);
      \u0275\u0275element(36, "polyline", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "p", 20);
      \u0275\u0275text(38, "Monitor credit scores and financial habits");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(39, "div", 25)(40, "div", 26)(41, "a", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(42, "svg", 28);
      \u0275\u0275element(43, "polyline", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, " Back to home ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(45, "h1", 30);
      \u0275\u0275text(46, "Welcome back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p", 31);
      \u0275\u0275text(48, "Sign in to your Kids Money account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 32)(50, "div", 33)(51, "button", 34);
      \u0275\u0275listener("click", function LoginPage_Template_button_click_51_listener() {
        return ctx.tab.set("parent");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(52, "svg", 35);
      \u0275\u0275element(53, "path", 36)(54, "circle", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275text(55, " Parent ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(56, "button", 38);
      \u0275\u0275listener("click", function LoginPage_Template_button_click_56_listener() {
        return ctx.tab.set("kid");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(57, "svg", 35);
      \u0275\u0275element(58, "path", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275text(59, " Kid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(60, LoginPage_Conditional_60_Template, 16, 6);
      \u0275\u0275conditionalCreate(61, LoginPage_Conditional_61_Template, 18, 6);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(51);
      \u0275\u0275property("ngClass", ctx.tab() === "parent" ? "tab-active" : "tab-inactive");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", ctx.tab() === "kid" ? "tab-active" : "tab-inactive");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.tab() === "parent" ? 60 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tab() === "kid" ? 61 : -1);
    }
  }, dependencies: [CommonModule, NgClass, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm], styles: ["\n\n.tab-active[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  background-color: var(--bg-card);\n  color: var(--fg);\n  cursor: pointer;\n  border: none;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.10);\n  font-family: var(--font-heading);\n}\n.tab-inactive[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  background: transparent;\n  color: var(--fg-muted);\n  cursor: pointer;\n  border: none;\n  font-family: var(--font-heading);\n}\n/*# sourceMappingURL=login.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPage, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, NgClass, RouterLink, FormsModule], template: `
    <div class="min-h-screen flex" style="background-color: var(--bg)">

      <!-- Left brand panel (desktop only) -->
      <div class="hidden lg:flex lg:flex-col lg:w-[44%] xl:w-[40%] p-12 relative overflow-hidden" style="background: linear-gradient(145deg,#0D9488 0%,#0F766E 60%,#115E59 100%)">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.07]" style="background:white;transform:translate(40%,-30%)"></div>
          <div class="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-[0.06]" style="background:white;transform:translate(-30%,35%)"></div>
        </div>
        <a routerLink="/" class="flex items-center gap-2.5 mb-auto relative z-10">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background:rgba(255,255,255,0.18)">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/></svg>
          </div>
          <span class="font-bold font-heading text-white text-base">Kids Money</span>
        </a>
        <div class="relative z-10 mt-16">
          <h2 class="text-3xl font-extrabold font-heading text-white mb-4 tracking-tight leading-tight">Welcome back to Your Family's Finance Hub</h2>
          <p class="text-base mb-10" style="color:rgba(255,255,255,0.72)">Sign in to track tasks, goals, and your children's growing financial skills.</p>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(255,255,255,0.14)">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
              </div>
              <p class="text-sm text-white/80">Assign tasks and approve rewards instantly</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(255,255,255,0.14)">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <p class="text-sm text-white/80">Track goals, savings, and investments</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(255,255,255,0.14)">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>
              </div>
              <p class="text-sm text-white/80">Monitor credit scores and financial habits</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right form panel -->
      <div class="flex-1 flex items-center justify-center p-6 lg:p-12">
      <div class="w-full max-w-md">
        <a routerLink="/" class="inline-flex items-center gap-2 text-sm mb-8 lg:hidden" style="color:var(--fg-muted)" data-testid="login-back-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" stroke-width="2"/></svg>
          Back to home
        </a>

        <h1 class="text-2xl font-extrabold font-heading tracking-tight mb-1">Welcome back</h1>
        <p class="text-sm mb-8" style="color:var(--fg-muted)">Sign in to your Kids Money account</p>

        <div class="card p-7 lg:p-8">
          <!-- Tabs -->
          <div class="flex rounded-full p-1 mb-6" style="background-color: var(--muted)" data-testid="login-tabs">
            <button (click)="tab.set('parent')" [ngClass]="tab() === 'parent' ? 'tab-active' : 'tab-inactive'" data-testid="login-tab-parent">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke-width="2"/><circle cx="12" cy="7" r="4" stroke-width="2"/></svg>
              Parent
            </button>
            <button (click)="tab.set('kid')" [ngClass]="tab() === 'kid' ? 'tab-active' : 'tab-inactive'" data-testid="login-tab-kid">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-width="2"/></svg>
              Kid
            </button>
          </div>

          <!-- Parent Login -->
          @if (tab() === 'parent') {
            <form (ngSubmit)="handleParentLogin()" class="space-y-5">
              <div>
                <label class="label">Email</label>
                <input class="input" type="email" placeholder="parent&#64;example.com" [(ngModel)]="email" name="email" data-testid="login-email-input">
              </div>
              <div>
                <label class="label">Password</label>
                <input class="input" [type]="showPass() ? 'text' : 'password'" placeholder="Enter your password" [(ngModel)]="password" name="password" data-testid="login-password-input">
              </div>
              @if (error()) { <p class="text-red-500 text-sm">{{ error() }}</p> }
              <button type="submit" class="btn-primary w-full py-3" [disabled]="loading()" data-testid="login-submit-btn">
                {{ loading() ? 'Signing in...' : 'Sign In' }}
              </button>
            </form>
            <p class="text-center text-sm mt-6" style="color: var(--fg-muted)">
              Don't have an account? <a routerLink="/signup" class="font-medium text-primary" data-testid="login-to-signup">Sign up</a>
            </p>
          }

          <!-- Kid Login -->
          @if (tab() === 'kid') {
            <form (ngSubmit)="handleKidLogin()" class="space-y-5">
              <div>
                <label class="label">Parent's Email</label>
                <input class="input" type="email" placeholder="parent&#64;example.com" [(ngModel)]="parentEmail" name="parentEmail" data-testid="kid-login-parent-email">
              </div>
              <div>
                <label class="label">Your Name</label>
                <input class="input" type="text" placeholder="What's your name?" [(ngModel)]="kidName" name="kidName" data-testid="kid-login-name">
              </div>
              <div>
                <label class="label">Your PIN</label>
                <input class="input text-center tracking-[0.5em] text-lg" type="password" placeholder="Enter your secret PIN" [(ngModel)]="kidPin" name="kidPin" maxlength="6" data-testid="kid-login-pin">
              </div>
              @if (error()) { <p class="text-red-500 text-sm">{{ error() }}</p> }
              <button type="submit" class="btn-primary w-full py-3" [disabled]="loading()" data-testid="kid-login-submit-btn">
                {{ loading() ? 'Signing in...' : "Let's Go!" }}
              </button>
            </form>
            <p class="text-center text-sm mt-6" style="color: var(--fg-muted)">Ask your parent to create your account and set your PIN</p>
          }
        </div>
      </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;4b8ab50ac3363139c8c4cee510a1404e5720103ee6673c15ad7ecc5bdba32e7b;D:/Code/Angular/KidsMoney-main/frontend/src/app/pages/login.ts */\n.tab-active {\n  flex: 1;\n  padding: 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  background-color: var(--bg-card);\n  color: var(--fg);\n  cursor: pointer;\n  border: none;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.10);\n  font-family: var(--font-heading);\n}\n.tab-inactive {\n  flex: 1;\n  padding: 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  background: transparent;\n  color: var(--fg-muted);\n  cursor: pointer;\n  border: none;\n  font-family: var(--font-heading);\n}\n/*# sourceMappingURL=login.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "src/app/pages/login.ts", lineNumber: 129 });
})();
export {
  LoginPage
};
//# sourceMappingURL=chunk-XWCURDID.js.map
