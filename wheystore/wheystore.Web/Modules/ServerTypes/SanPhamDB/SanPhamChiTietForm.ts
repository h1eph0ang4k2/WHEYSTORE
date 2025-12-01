import { initFormType, IntegerEditor, PrefixedContext, ServiceLookupEditor, StringEditor } from "@serenity-is/corelib";

export interface SanPhamChiTietForm {
    SanPhamId: ServiceLookupEditor;
    TrongLuongText: StringEditor;
    SoLanDungMin: IntegerEditor;
    SoLanDungMax: IntegerEditor;
    HamLuongProtein: StringEditor;
    Calories: StringEditor;
    HamLuongBcaa: StringEditor;
    XuatXu: StringEditor;
}

export class SanPhamChiTietForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.SanPhamChiTiet';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!SanPhamChiTietForm.init) {
            SanPhamChiTietForm.init = true;

            var w0 = ServiceLookupEditor;
            var w1 = StringEditor;
            var w2 = IntegerEditor;

            initFormType(SanPhamChiTietForm, [
                'SanPhamId', w0,
                'TrongLuongText', w1,
                'SoLanDungMin', w2,
                'SoLanDungMax', w2,
                'HamLuongProtein', w1,
                'Calories', w1,
                'HamLuongBcaa', w1,
                'XuatXu', w1
            ]);
        }
    }
}