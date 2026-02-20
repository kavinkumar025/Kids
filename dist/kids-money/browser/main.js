import {
  AuthService,
  getAuth,
  getFirestore,
  initializeApp,
  provideAuth,
  provideFirebaseApp,
  provideFirestore
} from "./chunk-6U66OTJU.js";
import {
  Component,
  Router,
  RouterOutlet,
  bootstrapApplication,
  inject,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-QO3DPW6E.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// src/app/guards/auth.guard.ts
function waitForAuth(auth) {
  return new Promise((resolve) => {
    if (!auth.loading()) {
      resolve();
      return;
    }
    const interval = setInterval(() => {
      if (!auth.loading()) {
        clearInterval(interval);
        resolve();
      }
    }, 50);
  });
}
var parentGuard = () => __async(null, null, function* () {
  const auth = inject(AuthService);
  const router = inject(Router);
  yield waitForAuth(auth);
  if (!auth.isLoggedIn()) {
    router.navigate(["/login"]);
    return false;
  }
  if (auth.isKid()) {
    router.navigate(["/kid/dashboard"]);
    return false;
  }
  return true;
});
var kidGuard = () => __async(null, null, function* () {
  const auth = inject(AuthService);
  const router = inject(Router);
  yield waitForAuth(auth);
  if (!auth.isLoggedIn()) {
    router.navigate(["/login"]);
    return false;
  }
  if (auth.isParent()) {
    router.navigate(["/dashboard"]);
    return false;
  }
  return true;
});
var publicGuard = () => __async(null, null, function* () {
  const auth = inject(AuthService);
  const router = inject(Router);
  yield waitForAuth(auth);
  if (auth.isParent()) {
    router.navigate(["/dashboard"]);
    return false;
  }
  if (auth.isKid()) {
    router.navigate(["/kid/dashboard"]);
    return false;
  }
  return true;
});

// src/app/app.routes.ts
var routes = [
  { path: "", loadComponent: () => import("./chunk-7FYCWE42.js").then((m) => m.LandingPage), canActivate: [publicGuard] },
  { path: "login", loadComponent: () => import("./chunk-XWCURDID.js").then((m) => m.LoginPage), canActivate: [publicGuard] },
  { path: "signup", loadComponent: () => import("./chunk-Y6OWKXJP.js").then((m) => m.SignupPage), canActivate: [publicGuard] },
  { path: "dashboard", loadComponent: () => import("./chunk-DFH6P7FY.js").then((m) => m.ParentDashboardPage), canActivate: [parentGuard] },
  { path: "tasks", loadComponent: () => import("./chunk-DYAEC2AN.js").then((m) => m.ParentTasksPage), canActivate: [parentGuard] },
  { path: "wallet", loadComponent: () => import("./chunk-NIVIKL6S.js").then((m) => m.ParentWalletPage), canActivate: [parentGuard] },
  { path: "goals", loadComponent: () => import("./chunk-NX7TPWIY.js").then((m) => m.ParentGoalsPage), canActivate: [parentGuard] },
  { path: "sip", loadComponent: () => import("./chunk-JDXC5MAB.js").then((m) => m.ParentSIPPage), canActivate: [parentGuard] },
  { path: "loans", loadComponent: () => import("./chunk-PBLP6JVN.js").then((m) => m.ParentLoansPage), canActivate: [parentGuard] },
  { path: "learning", loadComponent: () => import("./chunk-IFJDOBY4.js").then((m) => m.ParentLearningPage), canActivate: [parentGuard] },
  { path: "settings", loadComponent: () => import("./chunk-K2H2X2C5.js").then((m) => m.ParentSettingsPage), canActivate: [parentGuard] },
  { path: "kid/dashboard", loadComponent: () => import("./chunk-IXB5OVRS.js").then((m) => m.KidHomePage), canActivate: [kidGuard] },
  { path: "kid/tasks", loadComponent: () => import("./chunk-ANAIHVUD.js").then((m) => m.KidTasksPage), canActivate: [kidGuard] },
  { path: "kid/wallet", loadComponent: () => import("./chunk-XSHIDQI3.js").then((m) => m.KidWalletPage), canActivate: [kidGuard] },
  { path: "kid/goals", loadComponent: () => import("./chunk-3HPJ65ZC.js").then((m) => m.KidGoalsPage), canActivate: [kidGuard] },
  { path: "kid/sip", loadComponent: () => import("./chunk-NFOOOH6D.js").then((m) => m.KidSIPPage), canActivate: [kidGuard] },
  { path: "kid/loans", loadComponent: () => import("./chunk-IHMGUALC.js").then((m) => m.KidLoansPage), canActivate: [kidGuard] },
  { path: "kid/learning", loadComponent: () => import("./chunk-FNONBP3I.js").then((m) => m.KidLearningPage), canActivate: [kidGuard] },
  { path: "kid/achievements", loadComponent: () => import("./chunk-O6R3IT6N.js").then((m) => m.KidAchievementsPage), canActivate: [kidGuard] },
  { path: "**", redirectTo: "" }
];

// src/app/environments/environment.ts
var environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAhpl0iSeXL2bqzas1mEwQJ1PrVZwMmTs8",
    authDomain: "sample-firebase-ai-app-2775f.firebaseapp.com",
    projectId: "sample-firebase-ai-app-2775f",
    storageBucket: "sample-firebase-ai-app-2775f.firebasestorage.app",
    messagingSenderId: "134234971932",
    appId: "1:134234971932:web:33548cc54782fea1bee4d9"
  }
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};

// src/app/app.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet],
      template: `<router-outlet />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
