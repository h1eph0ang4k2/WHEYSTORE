import { BooleanEditor, DateEditor, initFormType, IntegerEditor, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface ThuongHieuForm {
    TenThuongHieu: StringEditor;
    Slug: StringEditor;
    Logo: StringEditor;
    MoTa: StringEditor;
    ThuTu: IntegerEditor;
    HienThi: BooleanEditor;
    NoiBat: BooleanEditor;
    CreatedAt: DateEditor;
    UpdatedAt: DateEditor;
}

export class ThuongHieuForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.ThuongHieu';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ThuongHieuForm.init) {
            ThuongHieuForm.init = true;

            var w0 = StringEditor;
            var w1 = IntegerEditor;
            var w2 = BooleanEditor;
            var w3 = DateEditor;

            initFormType(ThuongHieuForm, [
                'TenThuongHieu', w0,
                'Slug', w0,
                'Logo', w0,
                'MoTa', w0,
                'ThuTu', w1,
                'HienThi', w2,
                'NoiBat', w2,
                'CreatedAt', w3,
                'UpdatedAt', w3
            ]);
        }
    }
}