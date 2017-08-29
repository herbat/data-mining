import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './aot/src/app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
$('document').ready(function () {
    console.log('loaded');
});
//# sourceMappingURL=main.js.map