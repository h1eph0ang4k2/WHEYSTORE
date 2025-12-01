import { BooleanEditor, initFormType, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface SanPhamHuongViForm {
    TenHuongVi: StringEditor;
    IsDefault: BooleanEditor;
}

export class SanPhamHuongViForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.SanPhamHuongVi';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!SanPhamHuongViForm.init) {
            SanPhamHuongViForm.init = true;

            var w0 = StringEditor;
            var w1 = BooleanEditor;

            initFormType(SanPhamHuongViForm, [
                'TenHuongVi', w0,
                'IsDefault', w1
            ]);
        }
    }
}