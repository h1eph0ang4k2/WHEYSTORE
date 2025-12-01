import { initFormType, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface ShippersForm {
    MaShipperCode: StringEditor;
    TenCongTy: StringEditor;
    TenShipper: StringEditor;
    SoDienThoai: StringEditor;
}

export class ShippersForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.Shippers';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ShippersForm.init) {
            ShippersForm.init = true;

            var w0 = StringEditor;

            initFormType(ShippersForm, [
                'MaShipperCode', w0,
                'TenCongTy', w0,
                'TenShipper', w0,
                'SoDienThoai', w0
            ]);
        }
    }
}