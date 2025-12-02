import { initFormType, PrefixedContext, ServiceLookupEditor, StringEditor } from "@serenity-is/corelib";

export interface QuanHuyenForm {
    TenQuanHuyen: StringEditor;
    TinhThanhId: ServiceLookupEditor;
}

export class QuanHuyenForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.QuanHuyen';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!QuanHuyenForm.init) {
            QuanHuyenForm.init = true;

            var w0 = StringEditor;
            var w1 = ServiceLookupEditor;

            initFormType(QuanHuyenForm, [
                'TenQuanHuyen', w0,
                'TinhThanhId', w1
            ]);
        }
    }
}