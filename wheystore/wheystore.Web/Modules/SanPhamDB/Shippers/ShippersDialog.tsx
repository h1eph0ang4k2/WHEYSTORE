import { EntityDialog } from '@serenity-is/corelib';
import { ShippersForm, ShippersRow, ShippersService } from '../../ServerTypes/SanPhamDB';

export class ShippersDialog extends EntityDialog<ShippersRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return ShippersForm.formKey; }
    protected override getRowDefinition() { return ShippersRow; }
    protected override getService() { return ShippersService.baseUrl; }

    protected form = new ShippersForm(this.idPrefix);
}