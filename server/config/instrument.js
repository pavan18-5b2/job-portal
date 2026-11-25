import * as Sentry from "@sentry/node";
import {nodeProfilingIntegration} from "@sentry/profiling-node";
Sentry.init({
  dsn: "https://d7ad4274afbe98c3b9529bcdf68b5fcb@o4512492273401856.ingest.us.sentry.io/4512492287819776",

  integrations:[
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()

  ],

    tracesSampleRate: 1.0,
});



Sentry.profiler.startProfiler();