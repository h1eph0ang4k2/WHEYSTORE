using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251201_1424)]
public class DefaultDB_20251201_1424_SanPhamHuongViLink : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("SanPhamHuongViLink")
            .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
            .WithColumn("SanPhamId").AsInt32().NotNullable()
                .ForeignKey("FK_SPHVLink_SanPham", "SanPham", "MaSp")
            .WithColumn("HuongViId").AsInt32().NotNullable()
                .ForeignKey("FK_SPHVLink_HuongVi", "SanPhamHuongVi", "Id");

 
        Create.UniqueConstraint("UQ_SPHVLink_SanPham_HuongVi")
            .OnTable("SanPhamHuongViLink")
            .Columns("SanPhamId", "HuongViId");
    }
}