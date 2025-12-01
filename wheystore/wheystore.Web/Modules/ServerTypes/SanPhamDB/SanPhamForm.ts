import { BooleanEditor, DateEditor, DecimalEditor, initFormType, IntegerEditor, LookupEditor, PrefixedContext, ServiceLookupEditor, StringEditor } from "@serenity-is/corelib";

export interface SanPhamForm {
    TenSp: StringEditor;
    GiaBan: DecimalEditor;
    SoLuong: IntegerEditor;
    MoTa: StringEditor;
    MaLoai: LookupEditor;
    NhaCungCap: ServiceLookupEditor;
    ThuongHieuId: LookupEditor;
    AnhSp: StringEditor;
    AnhSpCt: StringEditor;
    GiamGia: DecimalEditor;
    GiaKhuyenMai: DecimalEditor;
    HienThi: BooleanEditor;
    HuongViList: LookupEditor;
    CreatedAt: DateEditor;
    UpdatedAt: DateEditor;
}

export class SanPhamForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.SanPham';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!SanPhamForm.init) {
            SanPhamForm.init = true;

            var w0 = StringEditor;
            var w1 = DecimalEditor;
            var w2 = IntegerEditor;
            var w3 = LookupEditor;
            var w4 = ServiceLookupEditor;
            var w5 = BooleanEditor;
            var w6 = DateEditor;

            initFormType(SanPhamForm, [
                'TenSp', w0,
                'GiaBan', w1,
                'SoLuong', w2,
                'MoTa', w0,
                'MaLoai', w3,
                'NhaCungCap', w4,
                'ThuongHieuId', w3,
                'AnhSp', w0,
                'AnhSpCt', w0,
                'GiamGia', w1,
                'GiaKhuyenMai', w1,
                'HienThi', w5,
                'HuongViList', w3,
                'CreatedAt', w6,
                'UpdatedAt', w6
            ]);
        }
    }
}