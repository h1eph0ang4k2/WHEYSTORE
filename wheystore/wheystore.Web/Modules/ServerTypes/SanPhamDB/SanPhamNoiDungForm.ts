import { initFormType, IntegerEditor, PrefixedContext, ServiceLookupEditor, StringEditor } from "@serenity-is/corelib";

export interface SanPhamNoiDungForm {
    SanPhamId: ServiceLookupEditor;
    TieuDe: StringEditor;
    LoaiSection: IntegerEditor;
    NoiDungHtml: StringEditor;
    ThuTu: IntegerEditor;
}

export class SanPhamNoiDungForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.SanPhamNoiDung';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!SanPhamNoiDungForm.init) {
            SanPhamNoiDungForm.init = true;

            var w0 = ServiceLookupEditor;
            var w1 = StringEditor;
            var w2 = IntegerEditor;

            initFormType(SanPhamNoiDungForm, [
                'SanPhamId', w0,
                'TieuDe', w1,
                'LoaiSection', w2,
                'NoiDungHtml', w1,
                'ThuTu', w2
            ]);
        }
    }
}