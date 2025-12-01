import { BooleanEditor, DecimalEditor, initFormType, IntegerEditor, PrefixedContext, ServiceLookupEditor, StringEditor } from "@serenity-is/corelib";

export interface SanPhamBienTheForm {
    SanPhamId: ServiceLookupEditor;
    TenBienThe: StringEditor;
    GiaBan: DecimalEditor;
    GiaKhuyenMai: DecimalEditor;
    SoLuong: IntegerEditor;
    IsDefault: BooleanEditor;
}

export class SanPhamBienTheForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.SanPhamBienThe';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!SanPhamBienTheForm.init) {
            SanPhamBienTheForm.init = true;

            var w0 = ServiceLookupEditor;
            var w1 = StringEditor;
            var w2 = DecimalEditor;
            var w3 = IntegerEditor;
            var w4 = BooleanEditor;

            initFormType(SanPhamBienTheForm, [
                'SanPhamId', w0,
                'TenBienThe', w1,
                'GiaBan', w2,
                'GiaKhuyenMai', w2,
                'SoLuong', w3,
                'IsDefault', w4
            ]);
        }
    }
}