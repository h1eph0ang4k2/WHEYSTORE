import { DateEditor, DecimalEditor, initFormType, IntegerEditor, LookupEditor, PrefixedContext, ServiceLookupEditor, StringEditor } from "@serenity-is/corelib";

export interface GioHangForm {
    UserId: LookupEditor;
    MaSp: ServiceLookupEditor;
    SoLuong: IntegerEditor;
    GiaLucThem: DecimalEditor;
    NgayTao: DateEditor;
    GhiChu: StringEditor;
}

export class GioHangForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.GioHang';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!GioHangForm.init) {
            GioHangForm.init = true;

            var w0 = LookupEditor;
            var w1 = ServiceLookupEditor;
            var w2 = IntegerEditor;
            var w3 = DecimalEditor;
            var w4 = DateEditor;
            var w5 = StringEditor;

            initFormType(GioHangForm, [
                'UserId', w0,
                'MaSp', w1,
                'SoLuong', w2,
                'GiaLucThem', w3,
                'NgayTao', w4,
                'GhiChu', w5
            ]);
        }
    }
}