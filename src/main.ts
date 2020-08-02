import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BsModule } from './bs/bs.module';

platformBrowserDynamic().bootstrapModule(BsModule)
  .catch(err => console.error(err));
