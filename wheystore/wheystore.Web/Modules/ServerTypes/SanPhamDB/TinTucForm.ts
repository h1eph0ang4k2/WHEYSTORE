import { BooleanEditor, DateEditor, initFormType, IntegerEditor, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface TinTucForm {
    DanhMucId: IntegerEditor;
    TieuDe: StringEditor;
    Slug: StringEditor;
    TomTat: StringEditor;
    AnhBia: StringEditor;
    NoiDungHtml: StringEditor;
    SeoTitle: StringEditor;
    SeoDescription: StringEditor;
    IsPublished: BooleanEditor;
    IsHot: BooleanEditor;
    ViewCount: IntegerEditor;
    NgayDang: DateEditor;
    NgayCapNhat: DateEditor;
    TacGia: StringEditor;
}

export class TinTucForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.TinTuc';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!TinTucForm.init) {
            TinTucForm.init = true;

            var w0 = IntegerEditor;
            var w1 = StringEditor;
            var w2 = BooleanEditor;
            var w3 = DateEditor;

            initFormType(TinTucForm, [
                'DanhMucId', w0,
                'TieuDe', w1,
                'Slug', w1,
                'TomTat', w1,
                'AnhBia', w1,
                'NoiDungHtml', w1,
                'SeoTitle', w1,
                'SeoDescription', w1,
                'IsPublished', w2,
                'IsHot', w2,
                'ViewCount', w0,
                'NgayDang', w3,
                'NgayCapNhat', w3,
                'TacGia', w1
            ]);
        }
    }
}