import { EntityDialog } from '@serenity-is/corelib';
import { SanPhamBienTheForm, SanPhamBienTheRow, SanPhamBienTheService } from '../../ServerTypes/SanPhamDB';

export class SanPhamBienTheDialog extends EntityDialog<SanPhamBienTheRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return SanPhamBienTheForm.formKey; }
    protected override getRowDefinition() { return SanPhamBienTheRow; }
    protected override getService() { return SanPhamBienTheService.baseUrl; }

    protected form = new SanPhamBienTheForm(this.idPrefix);
}