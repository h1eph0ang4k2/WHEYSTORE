import { BooleanEditor, initFormType, IntegerEditor, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface DanhMucTinTucForm {
    TenDm: StringEditor;
    Slug: StringEditor;
    MoTa: StringEditor;
    ThuTu: IntegerEditor;
    HienThi: BooleanEditor;
}

export class DanhMucTinTucForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.DanhMucTinTuc';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!DanhMucTinTucForm.init) {
            DanhMucTinTucForm.init = true;

            var w0 = StringEditor;
            var w1 = IntegerEditor;
            var w2 = BooleanEditor;

            initFormType(DanhMucTinTucForm, [
                'TenDm', w0,
                'Slug', w0,
                'MoTa', w0,
                'ThuTu', w1,
                'HienThi', w2
            ]);
        }
    }
}