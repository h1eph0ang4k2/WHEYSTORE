using System.Collections.Generic;

namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("SanPham")]
[DisplayName("San Pham"), InstanceName("San Pham")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
[LookupScript]
public sealed class SanPhamRow : Row<SanPhamRow.RowFields>, IIdRow, INameRow
{
    // alias join
    private const string jDanhMuc = "jDanhMuc";
    private const string jNhaCungCap = "jNhaCungCap";

    [DisplayName("Ma Sp"), Identity, IdProperty]
    public int? MaSp
    {
        get => fields.MaSp[this];
        set => fields.MaSp[this] = value;
    }

    [DisplayName("Ten Sp"), Size(150), NotNull, QuickSearch, NameProperty]
    public string TenSp
    {
        get => fields.TenSp[this];
        set => fields.TenSp[this] = value;
    }

    [DisplayName("Gia Ban"), Size(18), NotNull]
    public decimal? GiaBan
    {
        get => fields.GiaBan[this];
        set => fields.GiaBan[this] = value;
    }

    [DisplayName("So Luong"), NotNull]
    public int? SoLuong
    {
        get => fields.SoLuong[this];
        set => fields.SoLuong[this] = value;
    }

    [DisplayName("Mo Ta")]
    public string MoTa
    {
        get => fields.MoTa[this];
        set => fields.MoTa[this] = value;
    }

    // ===== Category (Danh mục) =====
    [DisplayName("Category"),
        ForeignKey(typeof(DanhMucSanPhamRow)), LeftJoin(jDanhMuc),
        TextualField(nameof(DanhMucSanPham))]
    [LookupEditor(typeof(DanhMucSanPhamRow))]
    public int? MaLoai
    {
        get => fields.MaLoai[this];
        set => fields.MaLoai[this] = value;
    }

    // ===== Supplier (Nhà cung cấp) =====
    [DisplayName("Supplier"),
        ForeignKey(typeof(NhaCungCapRow)), LeftJoin(jNhaCungCap),
        TextualField(nameof(TenNhaCungCap))]
    [ServiceLookupEditor(typeof(NhaCungCapRow))]
    public int? NhaCungCap
    {
        get => fields.NhaCungCap[this];
        set => fields.NhaCungCap[this] = value;
    }

    [DisplayName("Anh Sp"), Size(255)]
    public string AnhSp
    {
        get => fields.AnhSp[this];
        set => fields.AnhSp[this] = value;
    }

    [DisplayName("Anh Sp Ct"), Column("AnhSpCT"), Size(255)]
    public string AnhSpCt
    {
        get => fields.AnhSpCt[this];
        set => fields.AnhSpCt[this] = value;
    }

    [DisplayName("Giam Gia"), Size(5), Scale(2), NotNull]
    public decimal? GiamGia
    {
        get => fields.GiamGia[this];
        set => fields.GiamGia[this] = value;
    }

    [DisplayName("Gia Khuyen Mai"), Size(18)]
    public decimal? GiaKhuyenMai
    {
        get => fields.GiaKhuyenMai[this];
        set => fields.GiaKhuyenMai[this] = value;
    }

    [DisplayName("Hien Thi"), NotNull]
    public bool? HienThi
    {
        get => fields.HienThi[this];
        set => fields.HienThi[this] = value;
    }

    [DisplayName("Created At"), NotNull]
    public DateTime? CreatedAt
    {
        get => fields.CreatedAt[this];
        set => fields.CreatedAt[this] = value;
    }

    [DisplayName("Updated At")]
    public DateTime? UpdatedAt
    {
        get => fields.UpdatedAt[this];
        set => fields.UpdatedAt[this] = value;
    }

    // ===== Field hiển thị tên danh mục & NCC =====
    [DisplayName("Danh Mục Sản Phẩm"), Expression($"{jDanhMuc}.TenLoai")]
    public string DanhMucSanPham
    {
        get => fields.DanhMucSanPham[this];
        set => fields.DanhMucSanPham[this] = value;
    }

    [DisplayName("Nhà Cung Cấp"), Expression($"{jNhaCungCap}.TenCongTy")]
    public string TenNhaCungCap
    {
        get => fields.TenNhaCungCap[this];
        set => fields.TenNhaCungCap[this] = value;
    }

    [DisplayName("Thương Hiệu"),
    ForeignKey(typeof(ThuongHieuRow)), LeftJoin("jThuongHieu"),
    TextualField(nameof(TenThuongHieu))]
    [LookupEditor(typeof(ThuongHieuRow))]
    public int? ThuongHieuId
    {
        get => fields.ThuongHieuId[this];
        set => fields.ThuongHieuId[this] = value;
    }

    [DisplayName("Thương Hiệu"), Expression("jThuongHieu.TenThuongHieu")]
    public string TenThuongHieu
    {
        get => fields.TenThuongHieu[this];
        set => fields.TenThuongHieu
            [this] = value;
    }

    [DisplayName("Hương Vị"),
 LookupEditor(typeof(SanPhamHuongViRow), Multiple = true),
 NotMapped]
    [LinkingSetRelation(typeof(SanPhamHuongViLinkRow),
    nameof(SanPhamHuongViLinkRow.SanPhamId),
    nameof(SanPhamHuongViLinkRow.HuongViId))]
    public List<int> HuongViList
    {
        get => fields.HuongViList[this];
        set => fields.HuongViList[this] = value;
    }

    public class RowFields : RowFieldsBase
    {
        public Int32Field MaSp;
        public StringField TenSp;
        public DecimalField GiaBan;
        public Int32Field SoLuong;
        public StringField MoTa;
        public Int32Field MaLoai;
        public Int32Field NhaCungCap;
        public StringField AnhSp;
        public StringField AnhSpCt;
        public DecimalField GiamGia;
        public DecimalField GiaKhuyenMai;
        public BooleanField HienThi;
        public DateTimeField CreatedAt;
        public DateTimeField UpdatedAt;
        public StringField DanhMucSanPham;
        public StringField TenNhaCungCap;
        public Int32Field ThuongHieuId;
        public StringField TenThuongHieu;
        public ListField<int> HuongViList;
            

    }
}