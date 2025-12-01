import { DecimalEditor, initFormType, IntegerEditor, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface ChiTietDonHangForm {
    MaDh: IntegerEditor;
    MaSp: IntegerEditor;
    TenSp: StringEditor;
    AnhSp: StringEditor;
    DonGia: DecimalEditor;
    GiamGia: DecimalEditor;
    SoLuong: IntegerEditor;
    ThanhTien: DecimalEditor;
}

export class ChiTietDonHangForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.ChiTietDonHang';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ChiTietDonHangForm.init) {
            ChiTietDonHangForm.init = true;

            var w0 = IntegerEditor;
            var w1 = StringEditor;
            var w2 = DecimalEditor;

            initFormType(ChiTietDonHangForm, [
                'MaDh', w0,
                'MaSp', w0,
                'TenSp', w1,
                'AnhSp', w1,
                'DonGia', w2,
                'GiamGia', w2,
                'SoLuong', w0,
                'ThanhTien', w2
            ]);
        }
    }
}