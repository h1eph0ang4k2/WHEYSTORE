import { EntityDialog } from '@serenity-is/corelib';
import { SanPhamHuongViForm, SanPhamHuongViRow, SanPhamHuongViService } from '../../ServerTypes/SanPhamDB';

export class SanPhamHuongViDialog extends EntityDialog<SanPhamHuongViRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return SanPhamHuongViForm.formKey; }
    protected override getRowDefinition() { return SanPhamHuongViRow; }
    protected override getService() { return SanPhamHuongViService.baseUrl; }

    protected form = new SanPhamHuongViForm(this.idPrefix);
}

