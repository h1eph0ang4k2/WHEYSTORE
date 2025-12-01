import { EntityDialog } from '@serenity-is/corelib';
import { SanPhamForm, SanPhamRow, SanPhamService } from '../../ServerTypes/SanPhamDB';

export class SanPhamDialog extends EntityDialog<SanPhamRow, any> {
    static override[Symbol.typeInfo] = this.registerClass("whey.SanPhamDB.");

    protected override getFormKey() { return SanPhamForm.formKey; }
    protected override getRowDefinition() { return SanPhamRow; }
    protected override getService() { return SanPhamService.baseUrl; }

    protected form = new SanPhamForm(this.idPrefix);

    constructor() {
        super();

        // Khi thay đổi Giá bán hoặc Giảm giá -> cập nhật Giá khuyến mãi
        this.form.GiaBan.change(e => this.updateGiaKhuyenMai());
        this.form.GiamGia.change(e => this.updateGiaKhuyenMai());
    }

    private updateGiaKhuyenMai() {
        const giaBan = this.form.GiaBan.value || 0;
        let giamGia = this.form.GiamGia.value || 0;

        // đảm bảo phần trăm nằm trong 0–100
        if (giamGia < 0) giamGia = 0;
        if (giamGia > 100) giamGia = 100;

        const giaKhuyenMai = giaBan * (100 - giamGia) / 100;

        this.form.GiaKhuyenMai.value = giaKhuyenMai;
    }
}