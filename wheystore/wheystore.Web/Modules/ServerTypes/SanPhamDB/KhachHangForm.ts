import { DateEditor, EnumEditor, initFormType, IntegerEditor, LookupEditor, PrefixedContext, StringEditor } from "@serenity-is/corelib";
import { GioiTinhEnum } from "./GioiTinhEnum";

export interface KhachHangForm {
    UserId: IntegerEditor;
    HoTen: StringEditor;
    DienThoai: StringEditor;
    Email: StringEditor;
    DiaChi: StringEditor;
    TinhThanhId: LookupEditor;
    QuanHuyenId: LookupEditor;
    XaPhuongId: LookupEditor;
    MaBuuChinh: StringEditor;
    NgaySinh: DateEditor;
    GioiTinh: EnumEditor;
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
            var w2 = LookupEditor;
            var w3 = DateEditor;
            var w4 = EnumEditor;

            initFormType(KhachHangForm, [
                'UserId', w0,
                'HoTen', w1,
                'DienThoai', w1,
                'Email', w1,
                'DiaChi', w1,
                'TinhThanhId', w2,
                'QuanHuyenId', w2,
                'XaPhuongId', w2,
                'MaBuuChinh', w1,
                'NgaySinh', w3,
                'GioiTinh', w4
            ]);
        }
    }
}

[GioiTinhEnum]; // referenced types