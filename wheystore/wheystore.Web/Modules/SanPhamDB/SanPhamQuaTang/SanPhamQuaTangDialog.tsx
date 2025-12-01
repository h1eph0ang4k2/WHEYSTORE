import { EntityDialog } from '@serenity-is/corelib';
import { SanPhamQuaTangForm, SanPhamQuaTangRow, SanPhamQuaTangService } from '../../ServerTypes/SanPhamDB';

export class SanPhamQuaTangDialog extends EntityDialog<SanPhamQuaTangRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return SanPhamQuaTangForm.formKey; }
    protected override getRowDefinition() { return SanPhamQuaTangRow; }
    protected override getService() { return SanPhamQuaTangService.baseUrl; }

    protected form = new SanPhamQuaTangForm(this.idPrefix);
}