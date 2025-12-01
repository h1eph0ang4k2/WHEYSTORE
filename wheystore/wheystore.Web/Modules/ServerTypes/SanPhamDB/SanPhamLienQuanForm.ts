import { initFormType, PrefixedContext, ServiceLookupEditor } from "@serenity-is/corelib";

export interface SanPhamLienQuanForm {
    SanPhamId: ServiceLookupEditor;
    SanPhamLienQuanId: ServiceLookupEditor;
}

export class SanPhamLienQuanForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.SanPhamLienQuan';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!SanPhamLienQuanForm.init) {
            SanPhamLienQuanForm.init = true;

            var w0 = ServiceLookupEditor;

            initFormType(SanPhamLienQuanForm, [
                'SanPhamId', w0,
                'SanPhamLienQuanId', w0
            ]);
        }
    }
}