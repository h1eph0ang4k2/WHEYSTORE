import { BooleanEditor, DateEditor, initFormType, IntegerEditor, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface ReviewForm {
    SanPhamId: IntegerEditor;
    KhachHangId: IntegerEditor;
    UserId: IntegerEditor;
    Rating: IntegerEditor;
    TieuDe: StringEditor;
    NoiDung: StringEditor;
    AnhReview: StringEditor;
    DaDuyet: BooleanEditor;
    SoLanHuuIch: IntegerEditor;
    BiAn: BooleanEditor;
    CreatedAt: DateEditor;
    UpdatedAt: DateEditor;
}

export class ReviewForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.Review';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ReviewForm.init) {
            ReviewForm.init = true;

            var w0 = IntegerEditor;
            var w1 = StringEditor;
            var w2 = BooleanEditor;
            var w3 = DateEditor;

            initFormType(ReviewForm, [
                'SanPhamId', w0,
                'KhachHangId', w0,
                'UserId', w0,
                'Rating', w0,
                'TieuDe', w1,
                'NoiDung', w1,
                'AnhReview', w1,
                'DaDuyet', w2,
                'SoLanHuuIch', w0,
                'BiAn', w2,
                'CreatedAt', w3,
                'UpdatedAt', w3
            ]);
        }
    }
}