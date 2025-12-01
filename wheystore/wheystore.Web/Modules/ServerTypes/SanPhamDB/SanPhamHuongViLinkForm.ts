import { initFormType, LookupEditor, PrefixedContext } from "@serenity-is/corelib";

export interface SanPhamHuongViLinkForm {
    SanPhamId: LookupEditor;
    HuongViId: LookupEditor;
}

export class SanPhamHuongViLinkForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.SanPhamHuongViLink';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!SanPhamHuongViLinkForm.init) {
            SanPhamHuongViLinkForm.init = true;

            var w0 = LookupEditor;

            initFormType(SanPhamHuongViLinkForm, [
                'SanPhamId', w0,
                'HuongViId', w0
            ]);
        }
    }
}