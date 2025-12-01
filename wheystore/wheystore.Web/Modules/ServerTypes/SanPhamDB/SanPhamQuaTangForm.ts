import { BooleanEditor, initFormType, IntegerEditor, PrefixedContext, ServiceLookupEditor } from "@serenity-is/corelib";

export interface SanPhamQuaTangForm {
    SanPhamId: ServiceLookupEditor;
    QuaTangId: IntegerEditor;
    ThuTu: IntegerEditor;
    IsDefault: BooleanEditor;
}

export class SanPhamQuaTangForm extends PrefixedContext {
    static readonly formKey = 'SanPhamDB.SanPhamQuaTang';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!SanPhamQuaTangForm.init) {
            SanPhamQuaTangForm.init = true;

            var w0 = ServiceLookupEditor;
            var w1 = IntegerEditor;
            var w2 = BooleanEditor;

            initFormType(SanPhamQuaTangForm, [
                'SanPhamId', w0,
                'QuaTangId', w1,
                'ThuTu', w1,
                'IsDefault', w2
            ]);
        }
    }
}