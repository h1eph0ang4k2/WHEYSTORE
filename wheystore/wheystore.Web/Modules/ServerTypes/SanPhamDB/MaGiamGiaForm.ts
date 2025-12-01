import { BooleanEditor, DateEditor, DecimalEditor, initFormType, IntegerEditor, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface MaGiamGiaForm {
    MaCode: StringEditor;
    MoTa: StringEditor;
    LoaiGiam: IntegerEditor;
    GiaTri: DecimalEditor;
    DonToiThieu: DecimalEditor;
    NgayBatDau: DateEditor;
    NgayKetThuc: DateEditor;
    SoLanDungToiDa: IntegerEditor;
    SoLanDungMoiKhach: IntegerEditor;
    IsActive: BooleanEditor;
}

export class MaGiamGiaForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.MaGiamGia';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!MaGiamGiaForm.init) {
            MaGiamGiaForm.init = true;

            var w0 = StringEditor;
            var w1 = IntegerEditor;
            var w2 = DecimalEditor;
            var w3 = DateEditor;
            var w4 = BooleanEditor;

            initFormType(MaGiamGiaForm, [
                'MaCode', w0,
                'MoTa', w0,
                'LoaiGiam', w1,
                'GiaTri', w2,
                'DonToiThieu', w2,
                'NgayBatDau', w3,
                'NgayKetThuc', w3,
                'SoLanDungToiDa', w1,
                'SoLanDungMoiKhach', w1,
                'IsActive', w4
            ]);
        }
    }
}