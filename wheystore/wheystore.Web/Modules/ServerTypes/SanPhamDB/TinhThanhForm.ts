import { initFormType, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface TinhThanhForm {
    TenTinhThanh: StringEditor;
}

export class TinhThanhForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.TinhThanh';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!TinhThanhForm.init) {
            TinhThanhForm.init = true;

            var w0 = StringEditor;

            initFormType(TinhThanhForm, [
                'TenTinhThanh', w0
            ]);
        }
    }
}