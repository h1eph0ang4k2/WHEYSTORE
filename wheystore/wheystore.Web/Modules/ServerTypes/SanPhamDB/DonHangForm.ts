import { BooleanEditor, DateEditor, DecimalEditor, initFormType, LookupEditor, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface DonHangForm {
    MaKhachHang: LookupEditor;
    HoTenNguoiNhan: StringEditor;
    DiaChiNguoiNhan: StringEditor;
    SoDienThoaiNguoiNhan: StringEditor;
    EmailNguoiNhan: StringEditor;
    ShipperId: LookupEditor;
    NgayDatHang: DateEditor;
    NgayGiaoHangDuKhien: DateEditor;
    NgayGiaoHangHoanThanh: DateEditor;
    TongTienHang: DecimalEditor;
    PhiVanChuyen: DecimalEditor;
    TongThanhToan: DecimalEditor;
    GiamGiaDonHang: DecimalEditor;
    PhuongThucThanhToan: StringEditor;
    DaThanhToan: BooleanEditor;
    GhiChu: StringEditor;
    CreatedAt: DateEditor;
    UpdatedAt: DateEditor;
}

export class DonHangForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.DonHang';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!DonHangForm.init) {
            DonHangForm.init = true;

            var w0 = LookupEditor;
            var w1 = StringEditor;
            var w2 = DateEditor;
            var w3 = DecimalEditor;
            var w4 = BooleanEditor;

            initFormType(DonHangForm, [
                'MaKhachHang', w0,
                'HoTenNguoiNhan', w1,
                'DiaChiNguoiNhan', w1,
                'SoDienThoaiNguoiNhan', w1,
                'EmailNguoiNhan', w1,
                'ShipperId', w0,
                'NgayDatHang', w2,
                'NgayGiaoHangDuKhien', w2,
                'NgayGiaoHangHoanThanh', w2,
                'TongTienHang', w3,
                'PhiVanChuyen', w3,
                'TongThanhToan', w3,
                'GiamGiaDonHang', w3,
                'PhuongThucThanhToan', w1,
                'DaThanhToan', w4,
                'GhiChu', w1,
                'CreatedAt', w2,
                'UpdatedAt', w2
            ]);
        }
    }
}