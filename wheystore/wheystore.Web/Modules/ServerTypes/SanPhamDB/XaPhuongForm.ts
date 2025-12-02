import { initFormType, PrefixedContext, ServiceLookupEditor, StringEditor } from "@serenity-is/corelib";

export interface XaPhuongForm {
    TenXaPhuong: StringEditor;
    QuanHuyenId: ServiceLookupEditor;
}

export class XaPhuongForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.XaPhuong';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!XaPhuongForm.init) {
            XaPhuongForm.init = true;

            var w0 = StringEditor;
            var w1 = ServiceLookupEditor;

            initFormType(XaPhuongForm, [
                'TenXaPhuong', w0,
                'QuanHuyenId', w1
            ]);
        }
    }
}