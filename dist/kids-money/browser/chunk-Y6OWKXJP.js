import {
  DefaultValueAccessor,
  FormsModule,
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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
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

// src/app/pages/signup.ts
function SignupPage_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var SignupPage = class _SignupPage {
  auth = inject(AuthService);
  router = inject(Router);
  fullName = "";
  email = "";
  password = "";
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  handleSignup() {
    return __async(this, null, function* () {
      if (!this.fullName || !this.email || !this.password) {
        this.error.set("Please fill in all fields");
        return;
      }
      if (this.password.length < 6) {
        this.error.set("Password must be at least 6 characters");
        return;
      }
      this.loading.set(true);
      this.error.set("");
      try {
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Request timed out. Please check your Firebase configuration.")), 15e3));
        yield Promise.race([this.auth.signup(this.fullName, this.email, this.password), timeoutPromise]);
        this.router.navigate(["/dashboard"]);
      } catch (err) {
        const msg = err?.code === "auth/configuration-not-found" ? "Firebase Auth not configured. Please enable Email/Password sign-in in Firebase Console." : err?.message || "Signup failed";
        this.error.set(msg);
      } finally {
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function SignupPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignupPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupPage, selectors: [["app-signup"]], decls: 68, vars: 6, consts: [[1, "min-h-screen", "flex", 2, "background-color", "var(--bg)"], [1, "hidden", "lg:flex", "lg:flex-col", "lg:w-[44%]", "xl:w-[40%]", "p-12", "relative", "overflow-hidden", 2, "background", "linear-gradient(145deg,#0D9488 0%,#0F766E 60%,#115E59 100%)"], [1, "absolute", "inset-0", "pointer-events-none"], [1, "absolute", "top-0", "right-0", "w-72", "h-72", "rounded-full", "opacity-[0.07]", 2, "background", "white", "transform", "translate(40%,-30%)"], [1, "absolute", "bottom-0", "left-0", "w-56", "h-56", "rounded-full", "opacity-[0.06]", 2, "background", "white", "transform", "translate(-30%,35%)"], ["routerLink", "/", 1, "flex", "items-center", "gap-2.5", "mb-auto", "relative", "z-10"], [1, "w-9", "h-9", "rounded-xl", "flex", "items-center", "justify-center", 2, "background", "rgba(255,255,255,0.18)"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-white"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "3"], ["d", "M2 10h20"], [1, "font-bold", "font-heading", "text-white", "text-base"], [1, "relative", "z-10", "mt-16"], [1, "text-3xl", "font-extrabold", "font-heading", "text-white", "mb-4", "tracking-tight", "leading-tight"], [1, "text-base", "mb-10", 2, "color", "rgba(255,255,255,0.72)"], [1, "p-5", "rounded-2xl", 2, "background", "rgba(255,255,255,0.10)", "border", "1px solid rgba(255,255,255,0.14)"], [1, "text-sm", "font-semibold", "font-heading", "text-white", "mb-1"], [1, "space-y-1.5", "mt-2"], [1, "flex", "items-center", "gap-2", "text-sm", 2, "color", "rgba(255,255,255,0.80)"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "flex-shrink-0", 2, "color", "rgba(255,255,255,0.60)"], ["points", "20 6 9 17 4 12"], [1, "flex-1", "flex", "items-center", "justify-center", "p-6", "lg:p-12"], [1, "w-full", "max-w-md"], ["routerLink", "/", 1, "inline-flex", "items-center", "gap-2", "text-sm", "mb-8", "lg:hidden", 2, "color", "var(--fg-muted)"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["points", "15 18 9 12 15 6", "stroke-width", "2"], [1, "text-2xl", "font-extrabold", "font-heading", "tracking-tight", "mb-1"], [1, "text-sm", "mb-8", 2, "color", "var(--fg-muted)"], [1, "card", "p-7", "lg:p-8"], [1, "space-y-5", 3, "ngSubmit"], [1, "label"], ["type", "text", "placeholder", "Your full name", "name", "fullName", "data-testid", "signup-name-input", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "parent@example.com", "name", "email", "data-testid", "signup-email-input", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Min 6 characters", "name", "password", "data-testid", "signup-password-input", 1, "input", 3, "ngModelChange", "ngModel"], [1, "text-sm", "px-3", "py-2", "rounded-xl", 2, "color", "#EF4444", "background", "rgba(239,68,68,0.08)"], ["type", "submit", "data-testid", "signup-submit-btn", 1, "btn-teal", "w-full", "py-3.5", 3, "disabled"], [1, "text-center", "text-sm", "mt-6", 2, "color", "var(--fg-muted)"], ["routerLink", "/login", "data-testid", "signup-to-login", 1, "font-semibold", "text-primary"]], template: function SignupPage_Template(rf, ctx) {
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
      \u0275\u0275text(14, "Start your family's financial journey today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 13);
      \u0275\u0275text(16, "Join thousands of families teaching kids real money skills \xE2\u20AC\u201D with zero real money involved.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 14)(18, "p", 15);
      \u0275\u0275text(19, "What's included:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "ul", 16)(21, "li", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 18);
      \u0275\u0275element(23, "polyline", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " Unlimited task creation & rewards ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "li", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(26, "svg", 18);
      \u0275\u0275element(27, "polyline", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " Savings goals, SIP investing & loans ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "li", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 18);
      \u0275\u0275element(31, "polyline", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " Financial stories, quizzes & achievements ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "li", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(34, "svg", 18);
      \u0275\u0275element(35, "polyline", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " Up to 5 kids per family account ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "div", 20)(38, "div", 21)(39, "a", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(40, "svg", 23);
      \u0275\u0275element(41, "polyline", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, " Back to home ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(43, "h1", 25);
      \u0275\u0275text(44, "Create your account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p", 26);
      \u0275\u0275text(46, "Start your family's financial journey \xE2\u20AC\u201D completely free.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 27)(48, "form", 28);
      \u0275\u0275listener("ngSubmit", function SignupPage_Template_form_ngSubmit_48_listener() {
        return ctx.handleSignup();
      });
      \u0275\u0275elementStart(49, "div")(50, "label", 29);
      \u0275\u0275text(51, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function SignupPage_Template_input_ngModelChange_52_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.fullName, $event) || (ctx.fullName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div")(54, "label", 29);
      \u0275\u0275text(55, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function SignupPage_Template_input_ngModelChange_56_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div")(58, "label", 29);
      \u0275\u0275text(59, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function SignupPage_Template_input_ngModelChange_60_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(61, SignupPage_Conditional_61_Template, 2, 1, "p", 33);
      \u0275\u0275elementStart(62, "button", 34);
      \u0275\u0275text(63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "p", 35);
      \u0275\u0275text(65, " Already have an account? ");
      \u0275\u0275elementStart(66, "a", 36);
      \u0275\u0275text(67, "Sign in");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(52);
      \u0275\u0275twoWayProperty("ngModel", ctx.fullName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 61 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Creating account..." : "Create Account", " ");
    }
  }, dependencies: [CommonModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignupPage, [{
    type: Component,
    args: [{
      selector: "app-signup",
      standalone: true,
      imports: [CommonModule, RouterLink, FormsModule],
      template: `
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
          <h2 class="text-3xl font-extrabold font-heading text-white mb-4 tracking-tight leading-tight">Start your family's financial journey today</h2>
          <p class="text-base mb-10" style="color:rgba(255,255,255,0.72)">Join thousands of families teaching kids real money skills \xE2\u20AC\u201D with zero real money involved.</p>
          <div class="p-5 rounded-2xl" style="background:rgba(255,255,255,0.10);border:1px solid rgba(255,255,255,0.14)">
            <p class="text-sm font-semibold font-heading text-white mb-1">What's included:</p>
            <ul class="space-y-1.5 mt-2">
              <li class="flex items-center gap-2 text-sm" style="color:rgba(255,255,255,0.80)">
                <svg class="w-4 h-4 flex-shrink-0" style="color:rgba(255,255,255,0.60)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                Unlimited task creation &amp; rewards
              </li>
              <li class="flex items-center gap-2 text-sm" style="color:rgba(255,255,255,0.80)">
                <svg class="w-4 h-4 flex-shrink-0" style="color:rgba(255,255,255,0.60)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                Savings goals, SIP investing &amp; loans
              </li>
              <li class="flex items-center gap-2 text-sm" style="color:rgba(255,255,255,0.80)">
                <svg class="w-4 h-4 flex-shrink-0" style="color:rgba(255,255,255,0.60)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                Financial stories, quizzes &amp; achievements
              </li>
              <li class="flex items-center gap-2 text-sm" style="color:rgba(255,255,255,0.80)">
                <svg class="w-4 h-4 flex-shrink-0" style="color:rgba(255,255,255,0.60)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                Up to 5 kids per family account
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Right form panel -->
      <div class="flex-1 flex items-center justify-center p-6 lg:p-12">
      <div class="w-full max-w-md">
        <a routerLink="/" class="inline-flex items-center gap-2 text-sm mb-8 lg:hidden" style="color:var(--fg-muted)">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" stroke-width="2"/></svg>
          Back to home
        </a>

        <h1 class="text-2xl font-extrabold font-heading tracking-tight mb-1">Create your account</h1>
        <p class="text-sm mb-8" style="color:var(--fg-muted)">Start your family's financial journey \xE2\u20AC\u201D completely free.</p>

        <div class="card p-7 lg:p-8">
          <form (ngSubmit)="handleSignup()" class="space-y-5">
            <div>
              <label class="label">Full Name</label>
              <input class="input" type="text" placeholder="Your full name" [(ngModel)]="fullName" name="fullName" data-testid="signup-name-input">
            </div>
            <div>
              <label class="label">Email</label>
              <input class="input" type="email" placeholder="parent&#64;example.com" [(ngModel)]="email" name="email" data-testid="signup-email-input">
            </div>
            <div>
              <label class="label">Password</label>
              <input class="input" type="password" placeholder="Min 6 characters" [(ngModel)]="password" name="password" data-testid="signup-password-input">
            </div>
            @if (error()) { <p class="text-sm px-3 py-2 rounded-xl" style="color:#EF4444;background:rgba(239,68,68,0.08)">{{ error() }}</p> }
            <button type="submit" class="btn-teal w-full py-3.5" [disabled]="loading()" data-testid="signup-submit-btn">
              {{ loading() ? 'Creating account...' : 'Create Account' }}
            </button>
          </form>
          <p class="text-center text-sm mt-6" style="color:var(--fg-muted)">
            Already have an account? <a routerLink="/login" class="font-semibold text-primary" data-testid="signup-to-login">Sign in</a>
          </p>
        </div>
      </div>
      </div>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupPage, { className: "SignupPage", filePath: "src/app/pages/signup.ts", lineNumber: 92 });
})();
export {
  SignupPage
};
//# sourceMappingURL=chunk-Y6OWKXJP.js.map
