import { EntityDialog } from '@serenity-is/corelib';
import { GioHangForm, GioHangRow, GioHangService } from '../../ServerTypes/SanPhamDB';

export class GioHangDialog extends EntityDialog<GioHangRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return GioHangForm.formKey; }
    protected override getRowDefinition() { return GioHangRow; }
    protected override getService() { return GioHangService.baseUrl; }

    protected form = new GioHangForm(this.idPrefix);
}