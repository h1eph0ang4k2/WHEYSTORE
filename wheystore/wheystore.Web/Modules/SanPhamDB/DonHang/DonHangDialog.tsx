import { EntityDialog } from '@serenity-is/corelib';
import { DonHangForm, DonHangRow, DonHangService } from '../../ServerTypes/SanPhamDB';

export class DonHangDialog extends EntityDialog<DonHangRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return DonHangForm.formKey; }
    protected override getRowDefinition() { return DonHangRow; }
    protected override getService() { return DonHangService.baseUrl; }

    protected form = new DonHangForm(this.idPrefix);
}