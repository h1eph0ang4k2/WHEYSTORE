using FluentMigrator;

namespace whey.Migrations.DefaultDB;
[DefaultDB, MigrationKey(20251119_1400)]
public class DefaultDB_20251119_1400 : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("SanPham")
              .WithColumn("MaSp").AsInt32().Identity().PrimaryKey().NotNullable()
              .WithColumn("TenSp").AsString(150).NotNullable()
              .WithColumn("GiaBan").AsDecimal(18, 0).NotNullable().WithDefaultValue(0)
              .WithColumn("SoLuong").AsInt32().NotNullable().WithDefaultValue(0)
              .WithColumn("MoTa").AsString(int.MaxValue).Nullable()
              .WithColumn("MaLoai").AsInt32().Nullable()
              .WithColumn("NhaCungCap").AsInt32().Nullable()
              .WithColumn("AnhSp").AsString(255).Nullable()
              .WithColumn("AnhSpCT").AsString(255).Nullable()
              .WithColumn("GiamGia").AsDecimal(5, 2).NotNullable().WithDefaultValue(0.00m)
              .WithColumn("GiaKhuyenMai").AsDecimal(18, 0).Nullable()
              .WithColumn("HienThi").AsBoolean().NotNullable().WithDefaultValue(true)
              .WithColumn("CreatedAt").AsDateTime2()
                    .NotNullable().WithDefault(SystemMethods.CurrentDateTime)
                .WithColumn("UpdatedAt").AsDateTime2().Nullable();

    }
}
