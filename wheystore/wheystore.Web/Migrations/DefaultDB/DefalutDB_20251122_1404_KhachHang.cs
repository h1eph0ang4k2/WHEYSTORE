using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251123_1406)]
public class DefaultDB_20251123_1406_KhachHang : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("KhachHang")
            .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
            .WithColumn("UserId").AsInt32().NotNullable()
            .WithColumn("HoTen").AsString(100).NotNullable()
            .WithColumn("DienThoai").AsString(20).Nullable()
            .WithColumn("Email").AsString(100).Nullable()
            .WithColumn("DiaChi").AsString(255).Nullable()
            .WithColumn("PhuongXa").AsString(100).Nullable()
            .WithColumn("QuanHuyen").AsString(100).Nullable()
            .WithColumn("TinhThanh").AsString(100).Nullable()
            .WithColumn("MaBuuChinh").AsString(20).Nullable()
            .WithColumn("NgaySinh").AsDate().Nullable()
            .WithColumn("GioiTinh").AsInt16().Nullable();
    }
}