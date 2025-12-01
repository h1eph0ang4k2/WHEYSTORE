using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251122_1419)]
public class DefaultDB_20251122_1419_SanPhamLienQuan     : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("SanPhamLienQuan")
            .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
            .WithColumn("SanPhamId").AsInt32().NotNullable()
                .ForeignKey("FK_SanPhamLienQuan_SanPham", "SanPham", "MaSp")
            .WithColumn("SanPhamLienQuanId").AsInt32().NotNullable()
                .ForeignKey("FK_SanPhamLienQuan_SanPham2", "SanPham", "MaSp");

        // tránh trùng
        Create.UniqueConstraint("UX_SanPhamLienQuan")
            .OnTable("SanPhamLienQuan")
            .Columns("SanPhamId", "SanPhamLienQuanId");
    }
}