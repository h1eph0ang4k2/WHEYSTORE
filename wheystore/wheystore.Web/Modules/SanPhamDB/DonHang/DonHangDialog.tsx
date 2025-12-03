import { EntityDialog } from '@serenity-is/corelib';
import { DonHangForm, DonHangRow, DonHangService, KhachHangService } from '../../ServerTypes/SanPhamDB';

export class DonHangDialog extends EntityDialog<DonHangRow, any> {
    static override[Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return DonHangForm.formKey; }
    protected override getRowDefinition() { return DonHangRow; }
    protected override getService() { return DonHangService.baseUrl; }
    protected form = new DonHangForm(this.idPrefix);

    constructor() {
    super();
    this.form.MaKhachHang.element.on('change', () => this.fillNguoiNhan());
}

    private fillNguoiNhan() {
        const id = this.form.MaKhachHang.value;
        if (!id) return;

        KhachHangService.Retrieve({ EntityId: +id }, r => {
            const kh = r.Entity;
            if (!kh) return;

            this.form.HoTenNguoiNhan.value = kh.HoTen ?? "";
            this.form.SoDienThoaiNguoiNhan.value = kh.DienThoai ?? "";
            this.form.EmailNguoiNhan.value = kh.Email ?? "";
        });
    }
}

