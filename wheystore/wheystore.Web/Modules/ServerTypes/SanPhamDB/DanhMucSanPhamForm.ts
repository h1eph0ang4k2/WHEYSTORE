import { initFormType, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface DanhMucSanPhamForm {
    TenLoai: StringEditor;
    MoTa: StringEditor;
}

export class DanhMucSanPhamForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.DanhMucSanPham';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!DanhMucSanPhamForm.init) {
            DanhMucSanPhamForm.init = true;

            var w0 = StringEditor;

            initFormType(DanhMucSanPhamForm, [
                'TenLoai', w0,
                'MoTa', w0
            ]);
        }
    }
}