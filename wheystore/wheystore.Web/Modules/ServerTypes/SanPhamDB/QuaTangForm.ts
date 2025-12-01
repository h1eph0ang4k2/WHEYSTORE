import { DecimalEditor, initFormType, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface QuaTangForm {
    TenQua: StringEditor;
    GiaTri: DecimalEditor;
    MoTa: StringEditor;
    Anh: StringEditor;
}

export class QuaTangForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.QuaTang';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!QuaTangForm.init) {
            QuaTangForm.init = true;

            var w0 = StringEditor;
            var w1 = DecimalEditor;

            initFormType(QuaTangForm, [
                'TenQua', w0,
                'GiaTri', w1,
                'MoTa', w0,
                'Anh', w0
            ]);
        }
    }
}