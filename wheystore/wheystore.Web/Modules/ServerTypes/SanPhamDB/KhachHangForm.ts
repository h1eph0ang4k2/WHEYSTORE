import { initFormType, IntegerEditor, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface KhachHangForm {
    UserId: IntegerEditor;
    HoTen: StringEditor;
    DienThoai: StringEditor;
    Email: StringEditor;
    DiaChi: StringEditor;
    PhuongXa: StringEditor;
    QuanHuyen: StringEditor;
    TinhThanh: StringEditor;
    MaBuuChinh: StringEditor;
    NgaySinh: StringEditor;
    GioiTinh: IntegerEditor;
}

export class KhachHangForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.KhachHang';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!KhachHangForm.init) {
            KhachHangForm.init = true;

            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(KhachHangForm, [
                'UserId', w0,
                'HoTen', w1,
                'DienThoai', w1,
                'Email', w1,
                'DiaChi', w1,
                'PhuongXa', w1,
                'QuanHuyen', w1,
                'TinhThanh', w1,
                'MaBuuChinh', w1,
                'NgaySinh', w1,
                'GioiTinh', w0
            ]);
        }
    }
}