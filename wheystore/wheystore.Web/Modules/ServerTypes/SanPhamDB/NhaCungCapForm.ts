import { DateEditor, initFormType, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface NhaCungCapForm {
    TenCongTy: StringEditor;
    TenLienHe: StringEditor;
    ChucDanhLienHe: StringEditor;
    DiaChi: StringEditor;
    ThanhPho: StringEditor;
    MaBuuChinh: StringEditor;
    QuocGia: StringEditor;
    SoDienThoai: StringEditor;
    MaSoThue: StringEditor;
    TrangChu: StringEditor;
    CreatedAt: DateEditor;
}

export class NhaCungCapForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.NhaCungCap';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!NhaCungCapForm.init) {
            NhaCungCapForm.init = true;

            var w0 = StringEditor;
            var w1 = DateEditor;

            initFormType(NhaCungCapForm, [
                'TenCongTy', w0,
                'TenLienHe', w0,
                'ChucDanhLienHe', w0,
                'DiaChi', w0,
                'ThanhPho', w0,
                'MaBuuChinh', w0,
                'QuocGia', w0,
                'SoDienThoai', w0,
                'MaSoThue', w0,
                'TrangChu', w0,
                'CreatedAt', w1
            ]);
        }
    }
}