import { EntityDialog } from '@serenity-is/corelib';
import { QuaTangForm, QuaTangRow, QuaTangService } from '../../ServerTypes/SanPhamDB';

export class QuaTangDialog extends EntityDialog<QuaTangRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return QuaTangForm.formKey; }
    protected override getRowDefinition() { return QuaTangRow; }
    protected override getService() { return QuaTangService.baseUrl; }

    protected form = new QuaTangForm(this.idPrefix);
}