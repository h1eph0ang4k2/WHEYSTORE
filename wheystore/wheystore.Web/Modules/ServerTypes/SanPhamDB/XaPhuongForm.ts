import { initFormType, IntegerEditor, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface XaPhuongForm {
    TenXaPhuong: StringEditor;
    QuanHuyenId: IntegerEditor;
}

export class XaPhuongForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.XaPhuong';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!XaPhuongForm.init) {
            XaPhuongForm.init = true;

            var w0 = StringEditor;
            var w1 = IntegerEditor;

            initFormType(XaPhuongForm, [
                'TenXaPhuong', w0,
                'QuanHuyenId', w1
            ]);
        }
    }
}