import { EntityDialog } from '@serenity-is/corelib';
import { KhachHangForm, KhachHangRow, KhachHangService } from '../../ServerTypes/SanPhamDB';

export class KhachHangDialog extends EntityDialog<KhachHangRow, any> {
    static override[Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return KhachHangForm.formKey; }
    protected override getRowDefinition() { return KhachHangRow; }
    protected override getService() { return KhachHangService.baseUrl; }

    protected form = new KhachHangForm(this.idPrefix);
}
