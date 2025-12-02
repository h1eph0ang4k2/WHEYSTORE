import { EntityDialog } from '@serenity-is/corelib';
import { XaPhuongForm, XaPhuongRow, XaPhuongService } from '../../ServerTypes/SanPhamDB';

export class XaPhuongDialog extends EntityDialog<XaPhuongRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return XaPhuongForm.formKey; }
    protected override getRowDefinition() { return XaPhuongRow; }
    protected override getService() { return XaPhuongService.baseUrl; }

    protected form = new XaPhuongForm(this.idPrefix);
}